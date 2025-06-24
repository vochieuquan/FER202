import React, { useState } from 'react';

export const quizData = [
  {
    question: 'What is ReactJS?',
    answers: [
      'A JavaScript library for building user interfaces',
      'A programming language',
      'A database management system',
    ],
    correctAnswer: 'A JavaScript library for building user interfaces',
  },
  {
    question: 'What is JSX?',
    answers: [
      'A programming language',
      'A file format',
      'A syntax extension for JavaScript',
    ],
    correctAnswer: 'A syntax extension for JavaScript',
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleNext = () => {
    const current = quizData[currentQuestion];

    if (selectedAnswer === current.correctAnswer) {
      setScore(score + 1);
    }

    const newAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(newAnswers);
    setSelectedAnswer('');

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div>
        <h2 style={{ color: 'red' }}>Quiz Completed!</h2>
        <p>Your score: {score}</p>
      </div>
    );
  }

  const questionData = quizData[currentQuestion];

  return (
    <div>
      <h2 style={{ color: 'red' }}>Question {currentQuestion + 1}</h2>
      <p>{questionData.question}</p>
      {questionData.answers.map((answer, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              name="answer"
              value={answer}
              checked={selectedAnswer === answer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
            />
            {answer}
          </label>
        </div>
      ))}
      <br />
      <button onClick={handleNext} disabled={!selectedAnswer}>Next</button>
    </div>
  );
};

export default Quiz;
