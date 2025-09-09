import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: localStorage.getItem("loggedInUser") || null,
    },reducers:{
        login: (state , action) => {
            state.user = action.payload;
            localStorage.setItem("loggedInUser" , action.payload);
        },
        logout:(state) => {
            state.user = null;
            localStorage.removeItem("loggedInUser")
        }
    }
})
export const {login , logout} = userSlice.actions;

export default userSlice.reducer;