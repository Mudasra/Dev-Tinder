import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../utils/ChatSlice";

const ChatPage = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const match = useSelector((state) =>
    state.feed.matches.find((m) => m.id === parseInt(matchId))
  );

  const messages = useSelector((state) => state.chat.chats[matchId]) || [];

  const handleSend = (text) => {
    if (!text.trim()) return;
    dispatch(sendMessage({ matchId, sender: "me", text }));
  };

  useEffect(() => {
    if(!match) return;

    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.sender === "me") {
    const timer = setTimeout(() => {
      dispatch(sendMessage({ matchId, sender: match.name, text: "Got it!" }));
    }, 1500);

    return () => clearTimeout(timer);
}
  }, [messages, matchId, match.name, dispatch]);

  if (!match) {
    return (
      <div className="flex items-center justify-center h-screen gap-4">
        <p>No Match found.</p>
        <button
          onClick={() => navigate("/matches")}
          className="btn btn-success"
        >
          Go back
        </button>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col h-screen">
        <ChatHeader match={match} />
        <ChatMessages messages={messages} />
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
};

export default ChatPage;

// import React from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import ChatHeader from "./ChatHeader";
// import ChatMessages from "./ChatMessages";
// import ChatInput from "./ChatInput";
// import { sendMessage } from "../utils/chatSlice";

// const ChatPage = () => {
//   const { matchId } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const match = useSelector((state) =>
//     state.feed.matches.find((m) => m.id === parseInt(matchId))
//   );

//   const messages = useSelector((state) => state.chat.chats[matchId] || []);

//   const handleSend = (text) => {
//     if (!text.trim()) return;
//     dispatch(sendMessage({ matchId, sender: "me", text }));
//     // simulate reply
//     setTimeout(() => {
//       dispatch(sendMessage({ matchId, sender: match.name, text: "Got it 👍" }));
//     }, 1500);
//   };

//   if (!match) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p>No match found.</p>
//         <button className="btn ml-4" onClick={() => navigate("/matches")}>
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col h-screen">
//       <ChatHeader match={match} onBack={() => navigate("/matches")} />
//       <ChatMessages messages={messages} />
//       <ChatInput onSend={handleSend} />
//     </div>
//   );
// };

// export default ChatPage;
