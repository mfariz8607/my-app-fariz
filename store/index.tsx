// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counterSlice";
import quizReducer from "./reducer/quizSlice";
import profileReducer from "./reducer/profileSlice";
import topicReducer from "./reducer/topicSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quiz: quizReducer,
    profile: profileReducer,
    topic: topicReducer,
  },
});

// ✅ Export types after store is declared
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
