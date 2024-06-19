import { useState } from "react";
import Button from "./Button";

interface Props {
  content: {
    a: string;
    b: string;
    c: string;
    d: string;
    correct: string;
  };
  display: boolean;
  onCorrect: () => void;
}

const ButtonGroup = ({ content, onCorrect, display = false }: Props) => {
  const [clicked, setClicked] = useState("none");

  const handleClick = (thisAnswer: string) => {
    if (clicked === "none") {
      setClicked(thisAnswer);
      if (thisAnswer === content.correct) {
        onCorrect();
      }
    }
  };

  const handleColor = (thisAnswer: string) => {
    if (clicked !== "none") {
      if (thisAnswer === content.correct) return "success";
      if (thisAnswer === clicked) return "danger";
    }
    return "outline-primary";
  };

  return (
    <>
      {display && (
        <div
          className="btn-group-vertical"
          role="group"
          aria-label="Vertical button group"
        >
          <Button
            onClick={() => {
              handleClick(content.a);
            }}
            color={handleColor(content.a)}
          >
            {content.a}
          </Button>
          <Button
            onClick={() => {
              handleClick(content.b);
            }}
            color={handleColor(content.b)}
          >
            {content.b}
          </Button>
          <Button
            onClick={() => {
              handleClick(content.c);
            }}
            color={handleColor(content.c)}
          >
            {content.c}
          </Button>
          <Button
            onClick={() => {
              handleClick(content.d);
            }}
            color={handleColor(content.d)}
          >
            {content.d}
          </Button>
        </div>
      )}
    </>
  );
};

export default ButtonGroup;
