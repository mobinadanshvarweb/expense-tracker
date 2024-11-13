import { createSlice } from "@reduxjs/toolkit";

export interface LoginState {
  loginUser: {
    username: string;
    password: string;
  };
  loginError: string;
}
export const initialState: LoginState = {
  loginUser: {
    username: "",
    password: "",
  },
  loginError: "",
};
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.loginUser = action.payload;
      localStorage.setItem("login", JSON.stringify(state.loginUser));
    },
    setLoginError: (state, action) => {
      state.loginError = action.payload;
    },
  },
});

export const { setLogin, setLoginError } = loginSlice.actions;
export default loginSlice.reducer;
