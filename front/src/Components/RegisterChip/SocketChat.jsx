import React, { useState, useEffect } from "react";
import io from "socket.io-client";

let token = localStorage.getItem('token');
const socket = io.connect(`http://localhost:3003`, {
    auth: { token }, // Add the token to the 'auth' option
  }); // Replace the URL with your server URL

const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message.message]);
    });
  }, []);

  let nombre = "este es el nombre del usuario"; 
  const handleMessageSend = () => {
    socket.emit("sendMessage", {message, "sender": nombre});
    setMessage("");
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="border border-gray-300 p-2 mb-4">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 border border-gray-300 rounded p-2 mr-2"
        />
        <button
          onClick={handleMessageSend}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;