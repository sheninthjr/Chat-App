"use client";

import { useEffect, useRef, useState } from "react";

const Message = () => {
  const [webSocket, setWebSocket] = useState(null);
  const [inputMessage, setInputMessage] = useState("");
  const [serverMessages, setServerMessages] = useState([]);
  const [userId, setUserId] = useState(null);
  const messagesContainerRef = useRef(null);
  useEffect(() => {
    const ws = new WebSocket("wss://chat-backend.sheninthjr.com");

    ws.onmessage = function (event) {
      const data = JSON.parse(event.data);
      if (data.type === "message") {
        setServerMessages((prevMessages): any => [
          ...prevMessages,
          data.payload.message,
        ]);
        setUserId(data.payload.userId);
      } else if (data.type === "user") {
        setUserId(data.payload.userId);
      }
    };
    ws.onopen = () => {
      const path = window.location.pathname;
      const roomId = path.split("/").pop();
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: roomId,
          },
        })
      );
    };
    // @ts-ignore
    setWebSocket(ws);
    return () => {
      console.log("Cleaning up Websocket");
      ws.close();
    };
  }, []);
  console.log(userId);
  const sendMessage = () => {
    if (webSocket) {
      // @ts-ignore
      webSocket.send(
        JSON.stringify({
          type: "message",
          payload: {
            message: inputMessage,
          },
        })
      );
      setInputMessage("");
    }
  };
  useEffect(() => {
    if (messagesContainerRef.current) {
      // @ts-ignore
      messagesContainerRef.current.scrollTop =
        // @ts-ignore
        messagesContainerRef.current.scrollHeight;
    }
  }, [serverMessages]);
  // @ts-ignore
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };
  return (
    <div>
      <div className="bg-black h-screen flex flex-col-reverse pb-16">
        <div
          className="text-black flex flex-col items-end overflow-y-auto pr-4"
          ref={messagesContainerRef}
        >
          {serverMessages.map((message, index) => (
            <div key={index} className="bg-gray-200 p-2 rounded-xl mb-2">
              {message}
            </div>
          ))}
        </div>
      </div>
      <div className=" flex justify-between fixed bottom-0 left-0 w-full p-4">
        <input
          type="text"
          value={inputMessage}
          placeholder="Type your message..."
          className="w-full border border-black text-black rounded px-4 py-2"
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-slate-900 w-10 rounded-xl ml-4 text-3xl"
          onClick={sendMessage}
        >{`>`}</button>
      </div>
    </div>
  );
};

export default Message;
