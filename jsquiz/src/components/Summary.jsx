import Button from "./Button";

function Summary({ questions, answers, restartQuiz }) {
  const correctAnswersCount = answers.filter(
    (answer) => answer.isCorrect
  ).length;
  const percentScore = (correctAnswersCount / questions.length) * 100;
  const passed = percentScore >= 80;

  return (
    <div className="summary-wrapper" >
      <h2 style={{color:passed ? "green" : "red"}}>{passed ? 'Gratulacje, quiz zaliczony!': 'Niestety, quiz niezaliczony'}</h2>
     <p id="score">
        Twój wynik to: <span style={{color:passed? "green" : "red"}}>{percentScore}%</span> ({correctAnswersCount} z
        {questions.length} poprawnych odpowiedzi)
      </p>
      <div className="summary-questions-wrapper">
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <p>
                Pytanie {index + 1}. {question.text}
              </p>
              <p style={{ color: "black" }}>
                Twoja odpowiedź:{" "}
                <span
                  style={{ color: answers[index].isCorrect ? "green" : "red" }}
                >
                  {answers[index].text}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <Button onClick={restartQuiz}>
        Powrót do startu
      </Button>
    </div>
  );
}

export default Summary;