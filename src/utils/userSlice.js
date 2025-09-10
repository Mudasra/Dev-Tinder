import { createSlice } from "@reduxjs/toolkit";

let storedUser = null;
try {
    const raw = localStorage.getItem("loggedInUser");
    storedUser = raw ? JSON.parse(raw) : null;
} catch(e) {
    console.error("Invalid stored User, clearing local storage: " , e);
    localStorage.removeItem("loggedInUser")
}

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: storedUser,
    },reducers:{
        login: (state , action) => {
            state.user = action.payload;
            localStorage.setItem("loggedInUser" , JSON.stringify(action.payload));
        },
        logout:(state) => {
            state.user = null;
            localStorage.removeItem("loggedInUser")
        },
        updateProfile: (state , action) => {
            state.user = {...state.user, ...action.payload};
            localStorage.setItem("loggedInUser" , JSON.stringify(state.user))
        },
        
    }
})
export const {login , logout , updateProfile} = userSlice.actions;

export default userSlice.reducer;