import { useEffect, useState } from "react";
import Box from "./Components/Box";
import ColorButtons from "./Components/Buttons";
import Score from "./Components/Score";
import "./App.css";
const App = () => {
  const [expectedColor, setExpectedColor] = useState("");
  const [boxColor, setBoxColor] = useState();
  const [score, setScore] = useState(0);
  // const [status, setStatus] = useState();

  // const changeColor = () => {
  //   const generatedColor = allColors[randomColor()];
  //   setExpectedColor(generatedColor);
  //   console.log(generatedColor);
  // };

  const checkMatchingColors = (color) => {
    if (color === expectedColor) {
      setScore((prev) => prev + 1);
    } else {
      console.log(color, "does not match");
    }
  };

  useEffect(() => {
    const match = allColors[randomColor()];
    setBoxColor(match);
    setExpectedColor(match);
  }, []);

  const resetGame =() => {
    setScore(0)
  }
  const randomColor = () => {
    return Math.floor(Math.random() * allColors.length);
  };

  const allColors = ["red", "blue", "teal", "green", "yellow"];
  return (
    <div className="container">
      <h1>GUESS THE CORRECT COLOR</h1>
      <p data-testid="gameInstructions" className="font-medium my-4 text-lg">
        Pick the button that matches the color in the box 👌
      </p>
      <Box boxColor={boxColor} />
      <ColorButtons
        // changeColor={changeColor}
        allColors={allColors}
        check={checkMatchingColors}
      />
      <Score score={score} />
    </div>
  );
};

export default App;
