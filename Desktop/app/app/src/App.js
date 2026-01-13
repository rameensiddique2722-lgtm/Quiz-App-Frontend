import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

const questions = [
  {
    questionsText: "HTML ka full form kya hai?",
    answerOptions: [
      { answerText: "Hyper Text Markup Language", isCorrect: true },
      { answerText: "High Text Machine Language", isCorrect: false },
      { answerText: "Hyperlinks Text Markup Leveler", isCorrect: false },
      { answerText: "Home Tool Markup Language", isCorrect: false },
    ],
  },
  {
    questionsText: "CSS ka use kiske liye hota hai?",
    answerOptions: [
      { answerText: "Structure banane ke liye", isCorrect: false },
      { answerText: "Styling ke liye", isCorrect: true },
      { answerText: "Database ke liye", isCorrect: false },
      { answerText: "Server ke liye", isCorrect: false },
    ],
  },
  {
    questionsText: "JavaScript mainly kiske liye use hota hai?",
    answerOptions: [
      { answerText: "Styling", isCorrect: false },
      { answerText: "Web ko interactive banane ke liye", isCorrect: true },
      { answerText: "Database connection", isCorrect: false },
      { answerText: "Operating System", isCorrect: false },
    ],
  },
  {
    questionsText: "HTML me image insert karne ke liye kaunsa tag use hota hai?",
    answerOptions: [
      { answerText: "<img>", isCorrect: true },
      { answerText: "<image>", isCorrect: false },
      { answerText: "<picture>", isCorrect: false },
      { answerText: "<src>", isCorrect: false },
    ],
  },
  {
    questionsText: "CSS me text ka color change karne ke liye kaunsa property hota hai?",
    answerOptions: [
      { answerText: "background-color", isCorrect: false },
      { answerText: "font-color", isCorrect: false },
      { answerText: "text-style", isCorrect: false },
      { answerText: "color", isCorrect: true },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "500px", width: "100%" }}>
        
        {/* Agar quiz finish nahi hua tabhi heading show hogi */}
        {!showScore && <h3 className="text-center mb-4">Quiz App</h3>}

        {showScore ? (
          <div className="text-center">
            <h4>Quiz Finished!</h4>
            <p>Your Score: {score} / {questions.length}</p>
            <button 
              className="btn btn-primary mt-3"
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setShowScore(false);
                setAnswered(false);
                setSelectedAnswer(null);
              }}
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <p className="fw-bold">{questions[currentQuestion].questionsText}</p>

            {questions[currentQuestion].answerOptions.map((option, index) => (
              <button
                key={index}
                className={`btn w-100 mb-2 ${
                  answered
                    ? option.isCorrect
                      ? "btn-success"
                      : selectedAnswer === index
                      ? "btn-danger"
                      : "btn-outline-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => handleAnswerOption(index, option.isCorrect)}
                disabled={answered}
              >
                {option.answerText}
              </button>
            ))}

            <button
              className={`btn btn-success w-100 mt-3 ${!answered ? "disabled" : ""}`}
              disabled={!answered}
              onClick={nextQuestion}
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
            </button>

            <p className="text-center text-muted mt-3">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
