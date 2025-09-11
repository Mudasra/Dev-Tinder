import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMatch } from "../utils/feedSlice";
import { useNavigate } from "react-router-dom";

const MatchCard = () => {
  const matches = useSelector((state) => state.feed.matches);
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  return (
    <>
      {matches.length === 0 ? (
        <div className="card bg-base-200 p-8 text-center">
          <h2 className="text-lg">
            No matches yet. Keep{" "}
            <span
              onClick={() => Navigate("/feed")}
              className="cursor-pointer underline underline-offset-4 transition-colors duration-300 hover:text-blue-500"
            >
              exploring
            </span>{" "}
            🔥
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {matches.map((m) => (
            <div key={m.id} className="card bg-base-200 shadow relative group">
              <figure className="px-4 pt-4">
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="rounded-xl w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">
                  {m.name} ,{m.age}
                </h3>
                <p className="text-sm opacity-80">{m.bio}</p>
                <div className="flex justify-center">
                  <button
                    onClick={() => dispatch(removeMatch(m.id))}
                    className="btn btn-error btn-sm btn-circle absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    ✕
                  </button>
                  <button className="btn btn-soft btn-success absolute bottom-8 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" onClick={() => Navigate(`/chat/$m.id`)}>Chat</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MatchCard;
