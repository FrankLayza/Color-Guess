import { useEffect, useState } from "react";
import Box from "./assets/Components/Box";
import ColorButtons from "./assets/Components/Buttons";
import Score from "./assets/Components/Score";
import "./App.css";
const App = () => {
  const [expectedColor, setExpectedColor] = useState("");
  const [boxColor, setBoxColor] = useState();
  const [score, setScore] = useState(0);
  const [slicedArray, setSlicedArray] = useState([]);
  const [status, setStatus] = useState({ message: "", type: "" });

  const allColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "cyan",
    "lime",
    "brown",
    "teal",
  ];
  const checkMatchingColors = (color) => {
    if (color === expectedColor) {
      setScore((prev) => prev + 1);
      setStatus({
        message: "Great Job! You guessed it right",
        type: "correct",
      });
      updateBox();
    } else {
      setScore((prev) => prev - 1);
      setStatus({ message: "Oops! Try Again", type: "wrong" });
      console.log(color, "does not match");
    }

    setTimeout(() => {
      setStatus({ message: "", type: "" });
    }, 1200);
  };

  const updateBox = () => {
    const shuffleColors = [...allColors].sort(() => Math.random() - 0.5);
    const slicedColors = shuffleColors.slice(0, 6);
    setSlicedArray(slicedColors);
    const match = slicedColors[randomColor(slicedColors)];
    setBoxColor(match);
    setExpectedColor(match);
  };

  useEffect(() => {
    updateBox();
  }, []);

  const randomColor = (color) => {
    return Math.floor(Math.random() * color.length);
  };

  const resetGame = () => {
    setScore(0);
    updateBox();
    setStatus("");
  };

  return (
    <div>
      <nav>
        <Score score={score} />
        <button
          onClick={resetGame}
          className="newGameButton"
          data-testid="newGameButton"
        >
          NEW GAME
        </button>
      </nav>
      <div className="container">
        <h3 className={`status-message ${status.type}`}>{status.message}</h3>
        <h1>GUESS THE CORRECT COLOR</h1>
        <p data-testid="gameInstructions" className="instructions">
          👉Pick the button that matches the color in the box 👈
        </p>
        <Box boxColor={boxColor} />
        <ColorButtons allColors={slicedArray} check={checkMatchingColors} />
      </div>
    </div>
  );
};

export default App;
