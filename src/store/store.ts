import { configureStore } from "@reduxjs/toolkit";
import reminderSlice from "./slice/reminder-slice";
import saveToLocalStorage from "../config/middelware";
import signUpSlice from "./slice/sign-up-slice";
import loginSlice from "./slice/login-slice";
import accountSlice from "./slice/account-slice";

export const store = configureStore({
  reducer: {
    reminder: reminderSlice,
    account: accountSlice,
    signup: signUpSlice,
    login: loginSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
