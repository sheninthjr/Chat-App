import express from "express";
import http from "http";
import cluster from 'cluster';
import os from 'os';
import { WebSocketServer } from "ws";
import {RedisSubscriptionManager} from "./RedisClient";

const app = express();
const port = 3001;

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

const users: { [key: string]: {
    room: string;
    ws: any;
} } = {};

let counter = 0;

const cpuCount = os.cpus().length;

if(cluster.isMaster){
    for (let i=0;i<cpuCount;i++){
        cluster.fork();
    }
}else{
    wss.on("connection", async (ws, req) => {
        const wsId = counter++;
        ws.on("message", (message: string) => {
            const data = JSON.parse(message.toString());
            if (data.type === "join") {
                users[wsId] = {
                    room: data.payload.roomId,
                    ws
                };
                RedisSubscriptionManager.getInstance().subscribe(wsId.toString(), data.payload.roomId, ws);
            }
            if (data.type === "message") {
                const roomId = users[wsId].room;
                const message = data.payload.message;
                RedisSubscriptionManager.getInstance().addChatMessage(roomId,wsId,message);
            }
        });
        ws.on("disconnect", () => {
            RedisSubscriptionManager.getInstance().unsubscribe(wsId.toString(), users[wsId].room);
        })
    });
    
    server.listen(port,()=>{
        console.log(`Server Listening on port:${port}`)
    });
}

