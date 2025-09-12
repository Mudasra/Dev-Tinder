import React, { useState } from "react";

const ChatInput = ({onSend}) => {
  const [text, setText] = useState();

  const handleSend = () =>{
    if(text.trim()) {
      onSend(text);
      setText("")
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === "Enter" && !e.shiftKey){
      e.preventDefault();
      handleSend();
    }
  }
  return (
    <div className="flex items-center p-2 bg-base-200">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        className="input input-bordered flex-1"
        placeholder="Enter your message..."
      />
      <button onClick={handleSend} className="btn btn-primary ml-2">Send</button>
    </div>
  );
};

export default ChatInput;
