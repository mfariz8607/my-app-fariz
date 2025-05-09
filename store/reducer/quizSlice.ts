import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
  answered: number;
  totalQuestions: number;
  score: number;
}

const initialState: QuizState = {
  answered: 0,
  totalQuestions: 10,
  score: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    initializeQuiz: (state, action: PayloadAction<number>) => {
      state.answered = 0;
      state.totalQuestions = action.payload;
      state.score = 0;
    },
    incrementScore: (state) => {
      state.score += 10;
      state.answered += 1;
    },
    incrementAnswered: (state) => {
      state.answered += 1;
    },
    resetQuiz: () => initialState, // Untuk reset progress quiz
  },
});

export const {
  initializeQuiz,
  incrementScore,
  incrementAnswered,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
