import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentStep, setAnswer, decrementTimer } from '../../Store';
import { Container, Button, Form, Card, ProgressBar, Row, Col } from 'react-bootstrap';
import './QuizPage.css';

function QuizPage() {
    const { questions, currentStep, selectedAnswers, timer } = useSelector(state => state.quiz);
    const dispatch = useDispatch();
    const question = questions[currentStep];

    useEffect(() => {
        const timerInterval = setInterval(() => {
            if (timer > 0) {
                dispatch(decrementTimer());
            } else {
                nextQuestion();
            }
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [dispatch, timer]);

    const handleAnswerChange = (e) => {
        dispatch(setAnswer({ index: currentStep, answer: e.target.value }));
    };

    const nextQuestion = () => {
        if (currentStep < questions.length - 1) {
            dispatch(setCurrentStep(currentStep + 1));
        } else {
            dispatch(setCurrentStep(currentStep + 1));
        }
    };

    const prevQuestion = () => {
        if (currentStep > 0) {
            dispatch(setCurrentStep(currentStep - 1));
        }
    };

    const skipQuestion = () => {
        nextQuestion();
    };

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center vh-100 quiz-page">
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
                    <Row className="mt-3">
                        <Col>
                            <Button onClick={prevQuestion} disabled={currentStep === 0} variant="secondary">Previous</Button>
                        </Col>
                        <Col>
                            <Button onClick={skipQuestion} variant="warning">Skip</Button>
                        </Col>
                        <Col>
                            <Button onClick={nextQuestion} variant="primary">Next</Button>
                        </Col>
                    </Row>
                    {/* <ProgressBar now={(timer / 59) * 100} className="mt-3" striped variant="info" animated /> */}
                    <h5 className="mt-3">Time remaining: {timer} seconds</h5>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default QuizPage;
