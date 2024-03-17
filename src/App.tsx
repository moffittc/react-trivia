import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import QuestionCard from "./components/QuestionCard";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <h2>Hello JoC!</h2>
      <Button></Button>
      {/* Can be the start button */}
      <QuestionCard></QuestionCard>
    </>
  );
}

export default App;
