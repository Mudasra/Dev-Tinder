import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearMatches } from "../utils/feedSlice"
import MatchCard from "./MatchCard";

const MatchPage = () => {
  const matches = useSelector((state) => state.feed.matches);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">
          Your matches
          <span className="badge badge-primary ml-2"> {matches.length}</span>
        </h1>
        <div className="flex gap-2">
          <button onClick={() => Navigate("/feed")} className="btn btn-outline">Back to Feed</button>
          {matches.length > 0 && (<button onClick={() => dispatch(clearMatches())} className="btn btn-outline">Clear All</button>) }
        </div>
      </div>
      <MatchCard/>
    </div>
  );
};

export default MatchPage;
