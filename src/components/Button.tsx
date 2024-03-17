import React from "react";

function handleClick() {
  console.log("You clicked me!"); // Goes to first card
}

const Button = () => {
  return <button onClick={handleClick}>Click me!</button>;
};

export default Button;
