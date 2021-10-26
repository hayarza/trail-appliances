import { createSlice } from "@reduxjs/toolkit";

// Slices ??? lol
export const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
  },
  reducers: {
    add: (state, action) => {
      state.questions = [...state.questions, action.payload];
    },
    remove: (state, action) => {
      state.questions = [...state.questions].filter(
        (question) => question !== action.payload
      );
    },
  },
});

export const { add, remove } = questionsSlice.actions;

export default questionsSlice.reducer;
