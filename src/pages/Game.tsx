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

  return (
    <div>
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-2xl">Find:</h1>
        <div className="flex">
          <GoalCards difficulty={difficulty} />
        </div>
      </div>
      <img src={img_source} alt="" />
    </div>
  );
}
