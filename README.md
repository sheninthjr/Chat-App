# Sheninth Jr Chat App

## Incognito Chat App

![Alt Text](/1.png)

![Alt Text](/2.png)

## Realtime Chat Communication with WebSockets and Redis

This project is a simple Realtime Chat application built using WebSockets for communication and Redis for managing room-based messaging. It allows users to join different chat rooms and exchange messages in real-time.

### Features

#### Real-time Communication: 
The application leverages WebSockets to enable real-time communication between clients and the server, providing instant message delivery.

#### Message Persistence: 
Redis is used to persist chat messages. This ensures that chat history is maintained, and users joining a room can see previous messages.

### Frontend Setup

To run the frontend cd into this directory.

```
$ cd apps/client
```

Make a Fresh yarn install on this folder

```
$ yarn install
```

Then run the Nextjs Frontend.

```
$ yarn dev
```

### Local Setup

Run redis locally on your system

```
$ docker-compose up
```

This command helps you to run the redis database locally.

### Backend Setup

To run the Backend cd into this directory.

#### Step1

```
$ cd packages/backend
```

#### Step2

```
$ yarn install
$ tsc -b
$ node dist/index.js
```
