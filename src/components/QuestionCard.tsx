import { useState } from "react";
import ButtonGroup from "./ButtonGroup";

interface Props {
  questionIndex: number;
}

const answers = [
  {
    a: "Soccer",
    b: "Racing",
    c: "Golf",
    d: "Baseball",
    correct: "Racing",
  },
  {
    a: "Donkey Kong",
    b: "Mario",
    c: "Pokemon",
    d: "Minecraft",
    correct: "Mario",
  },
  {
    a: "Bungie",
    b: "Blizzard",
    c: "Capcom",
    d: "Nintendo",
    correct: "Nintendo",
  },
  {
    a: "Electrician",
    b: "Painter",
    c: "Plumber",
    d: "Carpenter",
    correct: "Carpenter",
  },
  {
    a: "Nintendo",
    b: "Activision",
    c: "Blizzard",
    d: "Microsoft",
    correct: "Blizzard",
  },
  {
    a: "Capcom",
    b: "Konami",
    c: "Sega",
    d: "Namco",
    correct: "Capcom",
  },
  {
    a: "Shaun White",
    b: "Tony Hawk",
    c: "Rodney Mullen",
    d: "Mark Gonzales",
    correct: "Tony Hawk",
  },
  {
    a: "Overwatch",
    b: "God of War",
    c: "Assassin's Creed",
    d: "Halo",
    correct: "Halo",
  },
  {
    a: "Bungie",
    b: "Activision",
    c: "Ubisoft",
    d: "Blizzard",
    correct: "Bungie",
  },
  {
    a: "Blizzard",
    b: "Electronic Arts",
    c: "Bethesda",
    d: "Activision",
    correct: "Activision",
  },
  {
    a: "IceFrog",
    b: "ConcernedApe",
    c: "Notch",
    d: "Marmar",
    correct: "Notch",
  },
  {
    a: "Sony",
    b: "Microsoft",
    c: "Nintendo",
    d: "Epic Games",
    correct: "Microsoft",
  },
  {
    a: "Atari",
    b: "Taito",
    c: "Nintendo",
    d: "Namco",
    correct: "Atari",
  },
  {
    a: "Acadia",
    b: "Arroyo",
    c: "Aperture",
    d: "Abstergo",
    correct: "Abstergo",
  },
  {
    a: "King",
    b: "Zynga",
    c: "Niantic",
    d: "Meta",
    correct: "Niantic",
  },
  {
    a: "Nintendo",
    b: "Chucklefish",
    c: "Zynga",
    d: "Niantic",
    correct: "Zynga",
  },
  {
    a: "1987",
    b: "1988",
    c: "1989",
    d: "1990",
    correct: "1987",
  },
  {
    a: "Nintendo DS",
    b: "PlayStation 2",
    c: "PSP",
    d: "Game Boy Advance",
    correct: "PSP",
  },
  {
    a: "NEC",
    b: "Coleco",
    c: "Atari",
    d: "Entex",
    correct: "NEC",
  },
  {
    a: "Sega Genesis",
    b: "Wii",
    c: "PSP",
    d: "PlayStation 4",
    correct: "Wii",
  },
];

function QuestionCard({ questionIndex }: Props) {
  const questions = [
    "What kind of sport is played on the Gran Turismo video games series?",
    "The character 'Bowser' is the primary antagonist of what series?",
    "Which company released the iconic video game 'Donkey Kong'?",
    "What was the video game character Mario's original profession?",
    "Which developer produces the Starcraft, Hearthstone, and Overwatch games?",
    "Which developer released the 'Street Fighter' game in the 1980s?",
    "Which skateboarder has a video game series named after him?",
    "Which video game series features the Master Chief?",
    "What is the name of the developers of the 'Halo' series?",
    "Which video game publisher is behind the 'Call Of Duty' series?",
    "What is the nickname of Markus Persson, creator of Minecraft?",
    "What is the name of the company Markus Persson sold the rights to Minecraft to in 2014?",
    "Which company created the original Paperboy game?",
    "Which company is behind the experimental project in 'Assassin's Creed'?",
    "What is the name of the American augmented reality developer responsible for Pokemon Go?",
    "Which company developed the classic social game FarmVille?",
    "The first 'Final Fantasy' game was released in which year?",
    "In what gaming console can you play Crisis Core: Final Fantasy?",
    "Which company released the TurboExpress in 1990?",
    "In what gaming console can 'Helix', a music video game, be played?",
  ];
  const [score, setScore] = useState(1);

  const updateScore = () => {
    setScore(score + 1);
    alert("Correct! Score: " + score);
  };

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{"Question " + (questionIndex + 1)}</h5>
          {questions.map((question, index) => (
            <p key={question} className="card-text">
              {index === questionIndex && question}
            </p>
          ))}

          {answers.map((answer, index) => (
            <ButtonGroup
              key={index}
              content={answer}
              display={index === questionIndex && true}
              onCorrect={updateScore}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default QuestionCard;
