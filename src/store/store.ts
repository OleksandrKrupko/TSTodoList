import { configureStore } from "@reduxjs/toolkit";
import { slice } from "./todos";

export const store = configureStore({
  reducer: {
    todos: slice.reducer
  }
});
