import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMatchPopup } from "../utils/feedSlice";

const MatchPopup = () => {
  const dispatch = useDispatch();
  const match = useSelector((state) => state.feed.matchPopup);

  if (!match) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-base-200 bg-opacity-60">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center">
        <h2 className="text-xl font-bold mb-2 text-blue-500">🎉 It’s a Match!</h2>
        <img
          src={match.avatar}
          alt={match.name}
          className="w-32 h-32 rounded-full mx-auto mb-2"
        />
        <p className="text-blue-500">{match.name}</p>
        <button
          className="btn btn-primary mt-4"
          onClick={() => dispatch(closeMatchPopup())}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MatchPopup;
