import "./App.css";
import QuestionCard from "./components/QuestionCard";
import Button from "./components/Button";
import { useState } from "react";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(-1);

  return (
    <>
      {currentIndex === -1 ? (
        <>
          <h1>Trivia Game!</h1>
          <Button onClick={() => setCurrentIndex(0)}>Start</Button>
        </>
      ) : (
        <>
          <QuestionCard questionIndex={currentIndex} />
          <Button
            onClick={() =>
              currentIndex > 0 && setCurrentIndex(currentIndex - 1)
            }
          >
            {"<"}
          </Button>
          <Button
            onClick={() =>
              currentIndex < 19 && setCurrentIndex(currentIndex + 1)
            }
          >
            {">"}
          </Button>
        </>
      )}
    </>
  );
}
