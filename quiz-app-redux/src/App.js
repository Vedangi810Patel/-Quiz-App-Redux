// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       App . js
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { useSelector } from 'react-redux';
import StartPage from './components/MainPage/MainPage';
import QuizPage from './components/QuizPage/QuizPage';
import SummaryPage from './components/SummaryPage/SummaryPage';
import './App.css';

function App() {
  const { questions, currentStep, quizSubmitted } = useSelector(state => state.quiz);

  if (quizSubmitted) {
    return <SummaryPage />;
  } else if (questions.length === 0) {
    return <StartPage />;
  } else if (currentStep < questions.length) {
    return <QuizPage />;
  } else {
    return <SummaryPage />;
  }
}

export default App;


