import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
    updateBookmarks: (state, action) => {
      if (state.userData) {
        state.userData.bookmarks = action.payload;
      }
    },
  },
});

export const { setUser, logout, updateBookmarks } =
  authSlice.actions;

export const useUser = (state) => state.auth.userData;
export const isLoggedIn = (state) => state.auth.status;


export default authSlice.reducer;
