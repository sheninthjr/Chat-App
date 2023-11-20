"use client";

import { useEffect, useRef, useState } from "react";

const Message = () => {
  const [webSocket, setWebSocket] = useState(null);
  const [inputMessage, setInputMessage] = useState("");
  const [serverMessages, setServerMessages] = useState([]);
  const messagesContainerRef = useRef(null);
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");

    ws.onmessage = function (event) {
      const data = JSON.parse(event.data);
      if (data.type === "message") {
        setServerMessages((prevMessages): any => [
          ...prevMessages,
          data.payload.message,
        ]);
      }
    };

    ws.onopen = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const roomId = urlParams.get("roomId");
      ws.send(
        JSON.stringify({
          type: "join",
          payload: {
            roomId: roomId,
          },
        })
      );
    };

    setWebSocket(ws);
    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (webSocket) {
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
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [serverMessages]);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };
  return (
    <div>
      <div className="bg-white h-screen flex flex-col-reverse pb-16">
          <div className="text-black flex flex-col items-end overflow-y-auto pr-12"
          ref={messagesContainerRef}>
            {serverMessages.map((message, index) => (
              <div key={index} className="bg-gray-200 p-2 rounded mb-2">
                {message}
              </div>
            ))}
          </div>
        </div>
          <div className="fixed bottom-0 left-0 w-full p-4">
            <input
              type="text"
              value={inputMessage}
              placeholder="Type your message..."
              className="w-full border border-black text-black rounded px-4 py-2"
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
        </div>
    </div>
  );
};

export default Message;
