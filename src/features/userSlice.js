import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions; //we can acces the action anywhere only using this function

export const selectUser = (state) => state.user.user; //we get piece of information whrn using dispatch pr any actionthan we use selector function

export default userSlice.reducer;
