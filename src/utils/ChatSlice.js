import { createSlice } from "@reduxjs/toolkit";

const loadChats = () => {
    const saved = localStorage.getItem("chats");
    return saved ? JSON.parse(saved): {};
}

const ChatSlice = createSlice({
    name: "chat",
    initialState: {
        chats: loadChats(),
    },
    reducers: {
        sendMessage: (state , action) => {
            const {matchId , sender , text} = action.payload;
            const message = {
                sender , 
                text , 
                time : new Date().toISOString(),
            }

            if(!state.chats[matchId]){
                state.chats[matchId] = [];
            }

            state.chats[matchId].push(message);

            localStorage.setItem("chats" , JSON.stringify(state.chats));
        },
        clearAllChat: (state) => {
            state.chats = {};
            localStorage.setItem("chats" , JSON.stringify(state.chats));
        }        
    }
})
export const {clearAllChat , sendMessage} = ChatSlice.actions;

export default ChatSlice.reducer;