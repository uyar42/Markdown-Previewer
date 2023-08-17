import { configureStore } from "@reduxjs/toolkit";
import markDownSlice from "./markdownSlice";

export const store = configureStore({
  reducer: {
    text: markDownSlice,
  },
});
