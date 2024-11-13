import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  username: string;
  password: string;
}

export interface SignUpState {
  users: User[];
  error: string | null;
}

const initialState: SignUpState = {
  users: [],
  error: null,
};

export const signUpSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setSignUp: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setSignUp, setError } = signUpSlice.actions;
export default signUpSlice.reducer;
