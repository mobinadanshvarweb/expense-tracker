import { configureStore } from "@reduxjs/toolkit";
import reminderSlice from "./slice/reminder-slice";
import saveToLocalStorage from "../config/middelware";

export const store = configureStore({
  reducer: {
    reminder: reminderSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveToLocalStorage),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
