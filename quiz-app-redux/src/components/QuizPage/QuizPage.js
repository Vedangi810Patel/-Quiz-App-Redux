// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setCurrentStep, setAnswer, decrementTimer, submitQuiz } from '../../Store';
// import { Container, Button, Form, Card, ProgressBar, Row, Col } from 'react-bootstrap';
// import SummaryPage from '../SummaryPage/SummaryPage';
// import './QuizPage.css';

// const QuizPage = () => {
//     const { questions, currentStep, selectedAnswers, timer } = useSelector(state => state.quiz);
//     const dispatch = useDispatch();
//     const question = questions[currentStep];
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [showWarning, setShowWarning] = useState(false);

//     useEffect(() => {
//         const timerInterval = setInterval(() => {
//             if (timer > 0) {
//                 dispatch(decrementTimer());
//             } else {
//                 handleTimerEnd();
//             }
//         }, 1000);

//         return () => clearInterval(timerInterval);
//     }, [dispatch, timer, currentStep, questions.length]);

//     const handleAnswerChange = (e) => {
//         dispatch(setAnswer({ index: currentStep, answer: e.target.value }));
//         setShowWarning(false);
//     };

//     const handleTimerEnd = () => {
//         if (currentStep === questions.length - 1) {
//             handleSubmit();
//         } else {
//             dispatch(setCurrentStep(currentStep + 1));
//         }
//     };

//     const nextQuestion = () => {
//         if (!selectedAnswers[currentStep]) {
//             setShowWarning(true);
//         } else {
//             setShowWarning(false);
//             if (currentStep < questions.length - 1) {
//                 dispatch(setCurrentStep(currentStep + 1));
//             } else {
//                 handleSubmit();
//             }
//         }
//     };

//     const prevQuestion = () => {
//         if (currentStep > 0) {
//             dispatch(setCurrentStep(currentStep - 1));
//             setShowWarning(false);
//         }
//     };

//     const skipQuestion = () => {
//         if (currentStep < questions.length - 1) {
//             dispatch(setCurrentStep(currentStep + 1));
//             setShowWarning(false);
//         }
//     };

//     const handleSubmit = () => {
//         dispatch(submitQuiz());
//         setIsSubmitted(true);
//     };

//     if (isSubmitted) {
//         return <SummaryPage />;
//     }

//     return (
//         <Container className="d-flex flex-column align-items-center justify-content-center vh-100 quiz-page">
//             <Card className="text-center shadow-lg quiz-card">
//                 <Card.Body>
//                     <Card.Title>Question {currentStep + 1}</Card.Title>
//                     <Card.Text>{question.question}</Card.Text>
//                     <Form className="w-100">
//                         {question.type === 'multiple_choice' &&
//                             question.options.map((option, idx) => (
//                                 <Form.Check
//                                     type="radio"
//                                     key={idx}
//                                     label={option}
//                                     value={option}
//                                     name="quiz-option"
//                                     checked={selectedAnswers[currentStep] === option}
//                                     onChange={handleAnswerChange}
//                                     className="mb-2"
//                                 />
//                             ))}
//                         {(question.type === 'single_line' || question.type === 'single_answer') && (
//                             <Form.Control
//                                 type="text"
//                                 value={selectedAnswers[currentStep] || ''}
//                                 onChange={handleAnswerChange}
//                                 className="mb-3"
//                             />
//                         )}
//                     </Form>
//                     {showWarning && (
//                         <p className="text-danger">Please answer the question before proceeding else skip the question.</p>
//                     )}
//                     <Row className="mt-3">
//                         <Col>
//                             <Button onClick={prevQuestion} disabled={currentStep === 0} variant="secondary">Previous</Button>
//                         </Col>
//                         <Col>
//                             <Button onClick={skipQuestion} variant="warning">Skip</Button>
//                         </Col>
//                         <Col>
//                             {currentStep === questions.length - 1 ? (
//                                 <Button onClick={handleSubmit} variant="success">Submit</Button>
//                             ) : (
//                                 <Button onClick={nextQuestion} variant="primary">Next</Button>
//                             )}
//                         </Col>
//                     </Row>
//                     <ProgressBar now={(timer / 59) * 100} className="mt-3" striped variant="info" animated />
//                     <h5 className="mt-3">Time remaining: {timer} seconds</h5>
//                 </Card.Body>
//             </Card>
//         </Container>
//     );
// };

// export default QuizPage;




// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setCurrentStep, setAnswer, decrementTimer, submitQuiz } from '../../Store';
// import { Container, Button, Form, Card, ProgressBar, Row, Col } from 'react-bootstrap';
// import SummaryPage from '../SummaryPage/SummaryPage';
// import './QuizPage.css';

// const QuizPage = () => {
//     const { questions, currentStep, selectedAnswers, timer } = useSelector(state => state.quiz);
//     const dispatch = useDispatch();
//     const question = questions[currentStep];
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [showWarning, setShowWarning] = useState(false);

//     useEffect(() => {
//         const timerInterval = setInterval(() => {
//             if (timer > 0) {
//                 dispatch(decrementTimer());
//             } else {
//                 handleTimerEnd();
//             }
//         }, 1000);

//         return () => clearInterval(timerInterval);
//     }, [dispatch, timer, currentStep, questions.length]);

//     const handleAnswerChange = (e) => {
//         dispatch(setAnswer({ index: currentStep, answer: e.target.value }));
//         setShowWarning(false);
//     };

//     const handleTimerEnd = () => {
//         if (currentStep === questions.length - 1) {
//             handleSubmit();
//         } else {
//             dispatch(setCurrentStep(currentStep + 1));
//         }
//     };

//     const nextQuestion = () => {
//         if (!selectedAnswers[currentStep]) {
//             setShowWarning(true);
//         } else {
//             setShowWarning(false);
//             if (currentStep < questions.length - 1) {
//                 dispatch(setCurrentStep(currentStep + 1));
//             } else {
//                 handleSubmit();
//             }
//         }
//     };

//     const prevQuestion = () => {
//         if (currentStep > 0) {
//             dispatch(setCurrentStep(currentStep - 1));
//             setShowWarning(false);
//         }
//     };

//     const skipQuestion = () => {
//         if (currentStep < questions.length - 1) {
//             dispatch(setCurrentStep(currentStep + 1));
//             setShowWarning(false);
//         } 
//     };

//     const handleSubmit = () => {
//         dispatch(submitQuiz());
//         setIsSubmitted(true);
//     };

//     if (isSubmitted) {
//         return <SummaryPage />;
//     }

//     return (
//         <Container className="d-flex flex-column align-items-center justify-content-center vh-100 quiz-page">
//             <Card className="text-center shadow-lg quiz-card">
//                 <Card.Body>
//                     <Card.Title>Question {currentStep + 1}</Card.Title>
//                     <Card.Text>{question.question}</Card.Text>
//                     <Form className="w-100">
//                         {question.type === 'multiple_choice' &&
//                             question.options.map((option, idx) => (
//                                 <Form.Check
//                                     type="radio"
//                                     key={idx}
//                                     label={option}
//                                     value={option}
//                                     name="quiz-option"
//                                     checked={selectedAnswers[currentStep] === option}
//                                     onChange={handleAnswerChange}
//                                     className="mb-2"
//                                 />
//                             ))}
//                         {(question.type === 'single_line' || question.type === 'single_answer') && (
//                             <Form.Control
//                                 type="text"
//                                 value={selectedAnswers[currentStep] || ''}
//                                 onChange={handleAnswerChange}
//                                 className="mb-3"
//                             />
//                         )}
//                     </Form>
//                     {showWarning && (
//                         <p className="text-danger">Please answer the question before proceeding.</p>
//                     )}
//                     <Row className="mt-3">
//                         <Col xs={12} sm={4} className="mb-2 mb-sm-0">
//                             <Button onClick={prevQuestion} disabled={currentStep === 0} variant="secondary" className="w-100">Previous</Button>
//                         </Col>
//                         <Col xs={12} sm={4} className="mb-2 mb-sm-0">
//                             <Button onClick={skipQuestion} variant="warning" className="w-100">Skip</Button>
//                         </Col>
//                         <Col xs={12} sm={4}>
//                             {currentStep === questions.length - 1 ? (
//                                 <Button onClick={handleSubmit} variant="success" className="w-100">Submit</Button>
//                             ) : (
//                                 <Button onClick={nextQuestion} variant="primary" className="w-100">Next</Button>
//                             )}
//                         </Col>
//                     </Row>
//                     <ProgressBar now={(timer / 59) * 100} className="mt-3" striped variant="info" animated />
//                     <h5 className="mt-3">Time remaining: {timer} seconds</h5>
//                 </Card.Body>
//             </Card>
//         </Container>
//     );
// };

// export default QuizPage;







import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentStep, setAnswer, decrementTimer, submitQuiz } from '../../Store';
import { Container, Button, Form, Card, ProgressBar, Row, Col } from 'react-bootstrap';
import SummaryPage from '../SummaryPage/SummaryPage';
import './QuizPage.css';

const QuizPage = () => {
    const { questions, currentStep, selectedAnswers, timer } = useSelector(state => state.quiz);
    const dispatch = useDispatch();
    const question = questions[currentStep];
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            if (timer > 0) {
                dispatch(decrementTimer());
            } else {
                handleTimerEnd();
            }
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [dispatch, timer, currentStep, questions.length]);

    const handleAnswerChange = (e) => {
        dispatch(setAnswer({ index: currentStep, answer: e.target.value }));
        setShowWarning(false);
    };

    const handleTimerEnd = () => {
        if (currentStep === questions.length - 1) {
            handleSubmit();
        } else {
            dispatch(setCurrentStep(currentStep + 1));
        }
    };

    const nextQuestion = () => {
        if (!selectedAnswers[currentStep]) {
            setShowWarning(true);
        } else {
            setShowWarning(false);
            if (currentStep < questions.length - 1) {
                dispatch(setCurrentStep(currentStep + 1));
            } else {
                handleSubmit();
            }
        }
    };

    const prevQuestion = () => {
        if (currentStep > 0) {
            dispatch(setCurrentStep(currentStep - 1));
            setShowWarning(false);
        }
    };

    const skipQuestion = () => {
        if (currentStep < questions.length - 1) {
            dispatch(setCurrentStep(currentStep + 1));
            setShowWarning(false);
        }
    };

    const handleSubmit = () => {
        dispatch(submitQuiz());
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return <SummaryPage />;
    }

    return (
        <Container className="quiz-page">
            <Card className="text-center shadow-lg quiz-card">
                <Card.Body>
                    <Card.Title>Question {currentStep + 1}</Card.Title>
                    <Card.Text>{question.question}</Card.Text>
                    <Form className="w-100">
                        {question.type === 'multiple_choice' &&
                            question.options.map((option, idx) => (
                                <Form.Check
                                    type="radio"
                                    key={idx}
                                    label={option}
                                    value={option}
                                    name="quiz-option"
                                    checked={selectedAnswers[currentStep] === option}
                                    onChange={handleAnswerChange}
                                    className="mb-2"
                                />
                            ))}
                        {(question.type === 'single_line' || question.type === 'single_answer') && (
                            <Form.Control
                                type="text"
                                value={selectedAnswers[currentStep] || ''}
                                onChange={handleAnswerChange}
                                className="mb-3"
                            />
                        )}
                    </Form>
                    {showWarning && (
                        <p className="text-danger">Please answer the question before proceeding.</p>
                    )}
                    <Row className="mt-3">
                        <Col xs={12} sm={4} className="mb-2 mb-sm-0">
                            <Button onClick={prevQuestion} disabled={currentStep === 0} variant="secondary">Previous</Button>
                        </Col>
                        <Col xs={12} sm={4} className="mb-2 mb-sm-0">
                            <Button onClick={skipQuestion} variant="warning">Skip</Button>
                        </Col>
                        <Col xs={12} sm={4}>
                            {currentStep === questions.length - 1 ? (
                                <Button onClick={handleSubmit} variant="success">Submit</Button>
                            ) : (
                                <Button onClick={nextQuestion} variant="primary">Next</Button>
                            )}
                        </Col>
                    </Row>
                    <ProgressBar now={(timer / 59) * 100} className="mt-3" striped variant="info" animated/>
                    <h5 className="mt-3">Time remaining: {timer} seconds</h5>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default QuizPage;
