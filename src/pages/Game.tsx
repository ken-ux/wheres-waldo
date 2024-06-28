import { useState } from "react";
import { useParams } from "react-router-dom";
import waldo_hard from "../assets/waldo_beach.jpg";
import waldo_easy from "../assets/waldo_city.jpeg";
import waldo_medium from "../assets/waldo_winter.jpeg";
import GameOver from "../components/GameOver";
import GoalCardGroup from "../components/GoalCardGroup";
import Timer from "../components/Timer";
import Tooltip from "../components/Tooltip";

export default function Game() {
  const [goalsCompleted, setGoalsCompleted] = useState({
    1: false,
    2: false,
    3: false,
  });
  const [message, setMessage] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [offsetPosition, setOffsetPosition] = useState({ x: 0, y: 0 });
  const [imageRatio, setImageRatio] = useState(1.0);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [time, setTime] = useState(0);

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
    // const image = document.querySelector("#game_screen") as HTMLImageElement;
    const imageWidth = e.currentTarget.width;
    const ratio = 1280 / imageWidth;

    // The ratio above is immediately available on render. If I were to reference the imageRatio state only,
    // then the ratio for the first click will always be 1.0. I'm setting it here purely to manipulate cursor size
    // in the tooltip.
    setImageRatio(1280 / imageWidth);

    // The dimensions of the click event are the same at any screen size after multiplying by the ratio.
    setPosition({
      x: e.nativeEvent.offsetX * ratio,
      y: e.nativeEvent.offsetY * ratio,
    });

    // Record the cursor position so that the tooltip is rendered in the correct place.
    setOffsetPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });

    setTooltipOpen(!tooltipOpen);
  };

  return (
    <div>
      <div className="mb-6 flex flex-col justify-center gap-6 sm:flex-row">
        <div className="flex w-full flex-col gap-4 md:flex-row">
          <GoalCardGroup goalsCompleted={goalsCompleted} />
        </div>
        <Timer gameOver={gameOver} setTime={setTime} />
      </div>
      <div
        className={
          "mb-6 rounded-lg text-white " +
          (message === "Correct!"
            ? "bg-green-600 p-4"
            : message === "Nope. They weren't there, try again."
              ? "bg-red-600 p-4"
              : message !== ""
                ? "bg-teal-600 p-4"
                : "")
        }
      >
        <p>{message}</p>
      </div>
      <div className="relative">
        <div className="flex items-center justify-center">
          <img
            id="game_screen"
            src={img_source}
            alt="game screen"
            onClick={clickHandler}
            className="w-full max-w-screen-xl rounded-2xl border-2 border-teal-600/50"
          />
          {gameOver && <GameOver time={time} />}
        </div>

        {tooltipOpen && (
          <Tooltip
            position={position}
            offsetPosition={offsetPosition}
            cursorRatio={imageRatio}
            setTooltipOpen={setTooltipOpen}
            goalsCompleted={goalsCompleted}
            setGoalsCompleted={setGoalsCompleted}
            setGameOver={setGameOver}
            setMessage={setMessage}
          />
        )}
      </div>
    </div>
  );
}
