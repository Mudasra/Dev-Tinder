import { createSlice } from "@reduxjs/toolkit";
import dummyProfiles from "./DummyProfiles";

const feedSlice = createSlice({
  name: "feed",
  initialState: {
    profiles: dummyProfiles,
    currentIndex: 0,
    matches: [],
    matchPopup: null,
  },
  reducers: {
    likeProfile: (state) => {
      const profile = state.profiles[state.currentIndex];
      if(profile) {
        state.matches.push(profile);
        state.matchPopup = profile;
      }
    },
    passProfile: (state) => {
        state.currentIndex = (state.currentIndex + 1) % state.profiles.length;
    },
    closeMatchPopup: (state) => {
      state.matchPopup = null;
      state.currentIndex = (state.currentIndex + 1) % state.profiles.length;
    }
  },
});

export const { likeProfile, passProfile, closeMatchPopup } = feedSlice.actions;
export default feedSlice.reducer;
