import { useState } from "react";
import StartScreen from "./components/StartScreen";
import Quiz from "./components/Quiz";
import Summary from "./components/Summary";
import { QUESTIONS } from "./assets/QUESTIONS";
import "./App.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState("start");
  const [userAnswers, setUserAnswers] = useState([]);
  // const [count, setCount] = useState(0);

  const handleStartQuiz = () => {
    setUserAnswers([]);
    setCurrentScreen("quiz");
  };
  const handleEndQuiz = (answers) => {
    setUserAnswers(answers);
    setCurrentScreen("summary");
  };

  const handleRestartQuiz = () => {
    setCurrentScreen("start");
  };

  return (
    <>
      {currentScreen === "start" && <StartScreen onStart={handleStartQuiz} />}
      {currentScreen === "quiz" && (
        <Quiz questions={QUESTIONS} endQuiz={handleEndQuiz} />
      )}
      {currentScreen === "summary" && (
        <Summary
          questions={QUESTIONS}
          answers={userAnswers}
          restartQuiz={handleRestartQuiz}
        />
      )}
    </>
  );
}

export default App;