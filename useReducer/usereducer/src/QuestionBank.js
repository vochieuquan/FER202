import React, { useReducer, useEffect, useRef, useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
  feedback: null, // {correct: boolean, answer: string}
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload, feedback: null };

    case "SUBMIT_ANSWER": {
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        feedback: {
          correct: isCorrect,
          answer: state.questions[state.currentQuestion].answer,
        },
      };
    }

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        feedback: null,
        showScore: state.currentQuestion + 1 === state.questions.length,
      };

    case "RESTART_QUIZ":
      return {
        ...initialState,
      };

    default:
      return state;
  }
}

const TOTAL_TIME = 10;

function QuestionBank() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore, feedback } = state;

  const [timer, setTimer] = useState(TOTAL_TIME);
  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem("highScore")) || 0
  );
  const timerRef = useRef();

  // Reset timer mỗi khi sang câu mới hoặc restart
  useEffect(() => {
    if (showScore) return;
    setTimer(TOTAL_TIME);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [currentQuestion, showScore]);

  // Hết giờ tự động submit đáp án
  useEffect(() => {
    if (timer === 0 && !showScore && !feedback) {
      dispatch({ type: "SUBMIT_ANSWER" });
    }
  }, [timer, showScore, feedback]);

  // Lưu điểm cao vào localStorage khi hoàn thành
  useEffect(() => {
    if (showScore) {
      if (score > highScore) {
        localStorage.setItem("highScore", score);
        setHighScore(score);
      }
    }
  }, [showScore, score, highScore]);

  const handleOptionSelect = (option) => {
    if (!feedback) dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleSubmit = () => {
    if (!feedback && selectedOption) {
      dispatch({ type: "SUBMIT_ANSWER" });
      clearInterval(timerRef.current);
    }
  };

  const handleNextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setHighScore(Number(localStorage.getItem("highScore")) || 0);
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>
              Your Score: {score} / {questions.length}
            </h2>
            <h4>High Score: {highScore}</h4>
            <Button variant="primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            <div className="mb-2" style={{ fontWeight: "bold" }}>
              Question {currentQuestion + 1}/{questions.length}
            </div>
            <div className="mb-2">
              Time:{" "}
              <span style={{ color: timer < 5 ? "red" : "black", fontWeight: "bold" }}>
                {timer}s
              </span>
            </div>
            <h4>
              {questions[currentQuestion].question}
            </h4>
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option
                      ? "success"
                      : "outline-secondary"
                  }
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                  disabled={!!feedback}
                >
                  {option}
                </Button>
              ))}
            </div>
            <div className="mt-3">
              <Button
                variant="primary"
                disabled={!selectedOption || !!feedback}
                onClick={handleSubmit}
              >
                Submit
              </Button>
              {feedback && (
                <Button
                  variant="secondary"
                  className="ms-2"
                  onClick={handleNextQuestion}
                >
                  {currentQuestion === questions.length - 1
                    ? "Finish Quiz"
                    : "Next Question"}
                </Button>
              )}
            </div>
            {feedback && (
              <div className="mt-3" style={{ fontWeight: "bold" }}>
                {feedback.correct ? (
                  <span style={{ color: "green" }}>
                    <FaCheckCircle /> Correct! 🎉
                  </span>
                ) : (
                  <span style={{ color: "red" }}>
                    <FaTimesCircle /> Incorrect! The correct answer is: {feedback.answer}
                  </span>
                )}
              </div>
            )}
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank;