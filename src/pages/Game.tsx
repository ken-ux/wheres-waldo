import { useParams } from "react-router-dom";
import GoalCards from "../components/GoalCards";
import waldo_easy from "../assets/waldo_city.jpeg";
import waldo_medium from "../assets/waldo_winter.jpeg";
import waldo_hard from "../assets/waldo_beach.jpg";

export default function Game() {
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
    const ratio = image ? 1280 / image.width : 1.0;

    // The dimensions of the click event are the same at any screen size after multiplying by the ratio.
    const dimensions = {
      x: e.nativeEvent.offsetX * ratio,
      y: e.nativeEvent.offsetY * ratio,
    };
    console.log(dimensions.x, dimensions.y);
  };

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl">Find:</h1>
          <div className="flex">
            <GoalCards difficulty={difficulty} />
          </div>
        </div>
        <div>
          <h1 className="text-2xl">Timer: 00:00:00</h1>
        </div>
      </div>
      <img
        id="game_screen"
        src={img_source}
        alt="game screen"
        onClick={clickHandler}
        className="w-full max-w-screen-xl"
      />
    </div>
  );
}
