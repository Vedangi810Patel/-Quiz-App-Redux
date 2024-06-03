import { configureStore, createSlice } from '@reduxjs/toolkit';
import { questions } from './assets/questions';

const initialState = {
  currentStep: 0,
  selectedAnswers: [],
  questions: [],
  numberOfQuestions: 0,
  timer: 59,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setNumberOfQuestions: (state, action) => {
      state.numberOfQuestions = action.payload;
      state.questions = questions.categories
        .flatMap(category => category.questions)
        .sort(() => 0.5 - Math.random())
        .slice(0, action.payload);
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
      state.timer = 59;
    },
    setAnswer: (state, action) => {
      const { index, answer } = action.payload;
      state.selectedAnswers[index] = answer;
    },
    resetQuiz: (state) => {
      state.currentStep = 0;
      state.selectedAnswers = [];
      state.questions = [];
      state.numberOfQuestions = 0;
      state.timer = 59;
    },
    decrementTimer: (state) => {
      state.timer -= 1;
    }
  }
});

export const { setNumberOfQuestions, setCurrentStep, setAnswer, resetQuiz, decrementTimer } = quizSlice.actions;

const store = configureStore({
  reducer: {
    quiz: quizSlice.reducer
  }
});

export default store;
