import React from "react";
import { useDispatch } from "react-redux";
import { likeProfile, passProfile } from "../utils/feedSlice";
import { useNavigate } from "react-router-dom";

const SwipeActions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex gap-6 mt-4">
      <button
        onClick={() => dispatch(passProfile())}
        className="btn btn-outline btn-error w-24"
      >
        ❌ Pass
      </button>
      <button
        onClick={() => dispatch(likeProfile())}
        className="btn btn-outline btn-success w-24"
      >
        ❤️ Like
      </button>
      <button onClick={() => navigate(`/chat/$m.id`)} className="btn btn-info btn-outline w-24">Chat</button>
    </div>
  );
};

export default SwipeActions;
