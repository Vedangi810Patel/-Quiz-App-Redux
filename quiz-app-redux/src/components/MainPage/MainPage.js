// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setNumberOfQuestions } from '../../Store';
// import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
// import './MainPage.css';
// import { IoIosArrowDown } from "react-icons/io";


// const MainPage = () => {
//     const [numQuestions, setNumQuestions] = useState('');
//     const dispatch = useDispatch();

//     const startQuiz = () => {
//         if (numQuestions > 0) {
//             dispatch(setNumberOfQuestions(Number(numQuestions)));
//         }
//     };

//     return (
//         <Container className="d-flex flex-column align-items-center justify-content-center vh-100 main-page">
//             <Card className="text-center shadow-lg main-card">
//                 <Card.Body>
//                     <Card.Title className="mb-4">Start Quiz</Card.Title>
//                     <Form>
//                         <Form.Group>
//                             <Form.Label>Number of Questions</Form.Label>
//                             <Form.Control as="select" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)}>
//                                 <option value="">Select the No of Question... <IoIosArrowDown /> </option>
//                                 <option value="5">5</option>
//                                 <option value="10">10</option>
//                                 <option value="15">15</option>
//                                 <option value="20">20</option>
//                             </Form.Control>
//                         </Form.Group>
//                         <Button className="mt-3" onClick={startQuiz} variant="primary">Start</Button>
//                     </Form>
//                 </Card.Body>
//             </Card>
//         </Container>
//     );
// }

// export default MainPage;



// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { setNumberOfQuestions } from '../../Store';
// import { Container, Form, Button, Card } from 'react-bootstrap';
// import './MainPage.css';

// const MainPage = () => {
//     const [numQuestions, setNumQuestions] = useState('');
//     const dispatch = useDispatch();

//     const startQuiz = () => {
//         if (numQuestions > 0) {
//             dispatch(setNumberOfQuestions(Number(numQuestions)));
//         }
//     };

//     return (
//         <Container className="d-flex flex-column align-items-center justify-content-center vh-100 main-page">
//             <Card className="text-center shadow-lg main-card">
//                 <Card.Body>
//                     <Card.Title className="mb-4">Start Quiz</Card.Title>
//                     <Form>
//                         <Form.Group>
//                             <Form.Label>Number of Questions</Form.Label>
//                             <Form.Control as="select" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)}>
//                                 <option value="">Select the number of questions...</option>
//                                 <option value="5">5</option>
//                                 <option value="10">10</option>
//                                 <option value="15">15</option>
//                                 <option value="20">20</option>
//                             </Form.Control>
//                         </Form.Group>
//                         <Button className="mt-3" onClick={startQuiz} variant="primary">Start</Button>
//                     </Form>
//                 </Card.Body>
//             </Card>
//         </Container>
//     );
// };

// export default MainPage;





import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNumberOfQuestions } from '../../Store';
import { Container, Form, Button, Card } from 'react-bootstrap';
import './MainPage.css';

const MainPage = () => {
    const [numQuestions, setNumQuestions] = useState('');
    const dispatch = useDispatch();

    const startQuiz = () => {
        if (numQuestions > 0) {
            dispatch(setNumberOfQuestions(Number(numQuestions)));
        }
    };

    return (
        <Container className="main-page">
            <Card className="text-center shadow-lg main-card">
                <Card.Body>
                    <Card.Title className="mb-4">Start Quiz</Card.Title>
                    <Form>
                        <Form.Group>
                            <Form.Label>Number of Questions</Form.Label>
                            <Form.Control as="select" value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)}>
                                <option value="">Select the number of questions...</option>
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </Form.Control>
                        </Form.Group>
                        <Button className="mt-3" onClick={startQuiz} variant="primary">Start</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MainPage;
