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
    state.feed.matches.find((m) => m.id === parseInt(matchId, 10))
  );

  const messages = useSelector((state) => state.chat.chats[String(matchId)]) || [];

  const handleSend = (text) => {
    if (!text.trim()) return;
    dispatch(sendMessage({ matchId: String(matchId), sender: "me", text }));
  };

  useEffect(() => {
    if (!match) return;

    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.sender === "me") {
      const timer = setTimeout(() => {
        dispatch(
          sendMessage({
            matchId: String(matchId),
            sender: match.name,
            text: " Mauris a magna non neque porta iaculis.",
          })
        );
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [messages, matchId, match, dispatch]);

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
    <div className="flex flex-col h-screen">
      <ChatHeader match={match} />
      <ChatMessages messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default ChatPage;
