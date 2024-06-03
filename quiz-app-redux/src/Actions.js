export const setNumberOfQuestions = (number) => ({
  type: 'SET_NUMBER_OF_QUESTIONS',
  payload: number,
});

export const setQuestions = (questions) => ({
  type: 'SET_QUESTIONS',
  payload: questions,
});

export const setCurrentQuestionIndex = (index) => ({
  type: 'SET_CURRENT_QUESTION_INDEX',
  payload: index,
});

export const setAnswer = (index, answer) => ({
  type: 'SET_ANSWER',
  payload: { index, answer },
});

export const submitQuiz = () => ({
  type: 'SUBMIT_QUIZ',
});
