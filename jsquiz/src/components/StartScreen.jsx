import Button from "./Button";


function StartScreen({ onStart }) {
  return (
    <div className="start-wrapper">
      <h1 style={{color: "black"}}>Javascript Quiz</h1>
      <Button onClick={onStart} >
        Rozpocznij Quiz
      </Button>
    </div>
  );
}

export default StartScreen;