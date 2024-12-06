import { useState } from "react";
import Button from "./Button";

function Quiz({ questions, endQuiz }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      endQuiz([...answers, answer]);
    }
  };

  const question = questions[currentQuestionIndex];

  return (
    <div className="quiz-wrapper">
      <h2>
        Pytanie nr {currentQuestionIndex + 1} {question.text}
      </h2>
      <div className="button-wrapper">
        {question.answers.map((answer, index) => (
          <Button key={index} onClick={() => handleAnswer(answer)}>
            {answer.text}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;