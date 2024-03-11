import { useState } from "react";
import "./App.css";

function App() {
  function handleClick() {
    console.log("you clicked me");
  }

  return (
    <>
      <h1>Hello World!</h1>
      <h2>Hello JoC!</h2>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}

export default App;
