import { createSlice } from "@reduxjs/toolkit";
import dummyProfiles from "./DummyProfiles";

const savedMatches = JSON.parse(localStorage.getItem("matches") || "[]")

const feedSlice = createSlice({


  name: "feed",
  initialState: {
    profiles: dummyProfiles,
    currentIndex: 0,
    matches: savedMatches,
    matchPopup: null,
  },
  reducers: {
    likeProfile: (state) => {
      const profile = state.profiles[state.currentIndex];
      if(!profile) return;

      const alreadyMatch = state.matches.find(
        (p) => p.id === profile.id
      )

      if(!alreadyMatch) {
        state.matches.push(profile);
        state.matchPopup = profile;

        localStorage.setItem("matches" , JSON.stringify(state.matches))
      }
    },
    passProfile: (state) => {
        state.currentIndex = (state.currentIndex + 1) % state.profiles.length;
    },
    closeMatchPopup: (state) => {
      state.matchPopup = null;
      state.currentIndex = (state.currentIndex + 1) % state.profiles.length;
    },
    removeMatch: (state , action) => {
            console.log("removing the id" , action.payload)
      state.matches = state.matches.filter((m) => m.id !== action.payload);
      localStorage.setItem("matches" , JSON.stringify(state.matches));
    },
    clearMatches: (state) => {
      state.matches = [];
      localStorage.removeItem("matches")
    }
  },
});

export const { likeProfile, passProfile, closeMatchPopup , removeMatch , clearMatches} = feedSlice.actions;
export default feedSlice.reducer;

