import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./actions/questions.actions";

export default configureStore({
  reducer: {
    appState: questionReducer,
  },
});
