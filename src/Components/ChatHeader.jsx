import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {clearChat} from '../utils/ChatSlice'

const ChatHeader = ({ match}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-4 bg-base-200 shadow">
      <div className="flex items-center">
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
      <button onClick={() =>dispatch(clearChat())} className="btn btn-error btn-outline ">Clear Chat</button>
    </div>
  );
};

export default ChatHeader;
