import { useEffect, useState } from "react";
import Box from "./Components/Box";
import ColorButtons from "./Components/Buttons";
import Score from "./Components/Score";

const App = () => {
  const [expectedColor, setExpectedColor] = useState('');
  const [boxColor, setBoxColor] = useState( ) 
  const [score, setScore] = useState(0);
  // const [status, setStatus] = useState();

  const changeColor = () => {
    const generatedColor = allColors[randomColor()];
    setExpectedColor(generatedColor);
    console.log(generatedColor);
  };

  const checkMatchingColors = (color) => {
    if (expectedColor === color){
      setScore((prev) => prev + 1)
    } else{
      console.log('does not match');
    }
  }
   
  useEffect(() => {setBoxColor(allColors[randomColor()])}, [])

  const randomColor = () => {
    return Math.floor(Math.random() * allColors.length);
  };

  const allColors = ["red", "blue", "teal", "green", "yellow"];
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-6xl font-bold text-center">
        GUESS THE CORRECT COLOR
      </h1>
      <p data-testid="gameInstructions" className="font-medium my-4 text-lg">
        Pick the button that matches the color in the box 👌
      </p>
      <Box boxColor={boxColor} />
      <ColorButtons changeColor={changeColor} allColors={allColors} check={checkMatchingColors}/>
      <Score score={score} />
    </div>
  );
};

export default App;
