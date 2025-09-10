import React from "react";
import { useDispatch } from "react-redux";
import { likeProfile, passProfile } from "../utils/feedSlice";

const SwipeActions = () => {
  const dispatch = useDispatch();

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
    </div>
  );
};

export default SwipeActions;
