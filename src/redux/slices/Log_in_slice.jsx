import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isLoggedIn: true, //remember to change the state
  data: [],
};

export const LogInSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = LogInSlice.actions;
export default LogInSlice.reducer;
