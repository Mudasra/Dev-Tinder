import React, { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="flex items-center p-2 bg-base-200">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
        className="input input-bordered flex-1"
      />
      <button onClick={handleSend} className="btn btn-primary ml-2">
        Send
      </button>
    </div>
  );
};

export default ChatInput;
