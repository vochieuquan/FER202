// QuizApp.jsx
import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Earth", "Jupiter", "Venus"],
    correctAnswer: "Mars"
  }
];

const QuizApp = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <div>
      {!isFinished ? (
        <Question
          question={quizData[currentQuestionIndex].question}
          options={quizData[currentQuestionIndex].options}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} total={quizData.length} />
      )}
    </div>
  );
};

export default QuizApp;
