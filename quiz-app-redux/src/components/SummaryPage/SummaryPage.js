import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetQuiz } from '../../Store';
import { Container, Table, Button, Card } from 'react-bootstrap';
import './SummaryPage.css';

const SummaryPage = () => {
    const { questions, selectedAnswers } = useSelector(state => state.quiz);
    const dispatch = useDispatch();

    const startNewQuiz = () => {
        dispatch(resetQuiz());
    };

    return (
        <Container className="d-flex flex-column align-items-center justify-content-center vh-100 summary-page">
            <Card className="text-center shadow-lg summary-card">
                <Card.Body>
                    <Card.Title>Quiz Summary</Card.Title>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Question</th>
                                <th>Your Answer</th>
                                <th>Correct Answer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((question, idx) => (
                                <tr key={idx}>
                                    <td>{idx + 1}</td>
                                    <td>{question.question}</td>
                                    <td>{selectedAnswers[idx]}</td>
                                    <td>{question.answer}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Button onClick={startNewQuiz} variant="success">Start A New Quiz</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default SummaryPage;
