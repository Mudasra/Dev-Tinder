import React from "react";
import { useNavigate } from "react-router-dom";

const ChatHeader = ({ match}) => {
  const navigate = useNavigate();
  
  return (
    <div className="flex items-center p-4 bg-base-200 shadow">
      <button className="btn btn-ghost mr-4" onClick={() => navigate(`/feed`)}>
        ←
      </button>
      <img
        src={match.avatar}
        alt={match.name}
        className="w-10 h-10 rounded-full mr-2"
      />
      <h2 className="font-bold">{match.name}</h2>
    </div>
  );
};

export default ChatHeader;
