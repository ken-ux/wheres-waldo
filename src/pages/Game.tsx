import { useState } from "react";
import { useParams } from "react-router-dom";
import Tooltip from "../components/Tooltip";
import GoalCardGroup from "../components/GoalCardGroup";
import waldo_easy from "../assets/waldo_city.jpeg";
import waldo_medium from "../assets/waldo_winter.jpeg";
import waldo_hard from "../assets/waldo_beach.jpg";

export default function Game() {
  const [goalsCompleted, setGoalsCompleted] = useState({
    1: false,
    2: false,
    3: false,
  });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imageRatio, setImageRatio] = useState(1.0);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const { difficulty } = useParams();
  let img_source;

  switch (difficulty) {
    case "easy":
      img_source = waldo_easy;
      break;
    case "medium":
      img_source = waldo_medium;
      break;
    case "hard":
      img_source = waldo_hard;
      break;
  }

  const clickHandler = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    // If image is resized smaller, check the current image size. Divide by the max-width
    // of the website (1280px) to get a ratio that we can convert the coordinates by.
    const image: HTMLImageElement | null =
      document.querySelector("#game_screen");
    if (image !== null) {
      setImageRatio(1280 / image.width);
    }

    // The dimensions of the click event are the same at any screen size after multiplying by the ratio.
    const dimensions = {
      x: e.nativeEvent.offsetX * imageRatio,
      y: e.nativeEvent.offsetY * imageRatio,
    };

    // Record the cursor position so that the tooltip is rendered in the correct place.
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    console.log(dimensions.x, dimensions.y);

    setTooltipOpen(!tooltipOpen);
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl">Find:</h1>
          <div className="flex">
            <GoalCardGroup
              tooltipMode={false}
              goalsCompleted={goalsCompleted}
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl">Timer: 00:00:00</h1>
        </div>
      </div>
      <div className="relative">
        <img
          id="game_screen"
          src={img_source}
          alt="game screen"
          onClick={clickHandler}
          className="w-full max-w-screen-xl"
        />
        {tooltipOpen && (
          <Tooltip
            position={position}
            cursorRatio={imageRatio}
            setTooltipOpen={setTooltipOpen}
            goalsCompleted={goalsCompleted}
            setGoalsCompleted={setGoalsCompleted}
            setGameOver={setGameOver}
          />
        )}
      </div>
      {gameOver && <div>Game Over</div>}
    </div>
  );
}
