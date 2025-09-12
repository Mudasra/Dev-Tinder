import React, { useEffect, useRef } from "react";

const ChatMessages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
  } , [messages])

  return (
  <div className="relative overflow-y-auto h-screen w-full p-4 bg-cover bg-[url('https://i.pinimg.com/1200x/f3/e7/44/f3e744a26cdf818959024ebcf4c641bc.jpg')]">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`chat ${msg.sender === "me" ? "chat-end" : "chat-start"}`}
        >
          <div className={`chat-bubble ${
            msg.sender === "me" ? "chat-bubble-primary" : "chat-bubble-secondary"
          }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef}/>
    </div>
  );
};

export default ChatMessages;
