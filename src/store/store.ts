import { configureStore } from "@reduxjs/toolkit";
import repositoryReducer from "./repositorySlice";

export const store = configureStore({
  reducer: {
    repositories: repositoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
