import React, { useEffect, useRef } from "react";

const ChatMessages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-base-100">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`chat ${msg.sender === "me" ? "chat-end" : "chat-start"}`}
        >
          <div
            className={`chat-bubble ${
              msg.sender === "me" ? "chat-bubble-primary" : "chat-bubble-secondary"
            }`}
          >
            {msg.text}
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
