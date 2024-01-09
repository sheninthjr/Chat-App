# Sheninth Jr Chat App

## Jr Chat App

![Alt Text](/sample.png)


# Realtime Chat Application with Next.js, WebSockets, and Redis

This repository houses a modern and scalable realtime chat application built with Next.js, WebSockets, and Redis. The application allows users to engage in instant messaging with a responsive and interactive user interface.

## Features:

### Next.js: 
Utilizes the power of Next.js for server-side rendering, optimized performance, and a seamless development experience.

### WebSockets: 
Enables realtime bidirectional communication between the server and clients, ensuring instant message updates and a smooth user experience.

### Redis: 
Serves as a scalable and efficient message broker, storing and distributing messages among connected clients for enhanced performance and reliability.

### Responsive UI: 
A user-friendly and responsive interface that adapts to various devices, providing a consistent experience across desktop and mobile platforms.

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
