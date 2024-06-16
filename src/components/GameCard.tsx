import { Link } from "react-router-dom";
import waldo_easy from "../assets/waldo_city.jpeg";
import waldo_medium from "../assets/waldo_winter.jpeg";
import waldo_hard from "../assets/waldo_beach.jpg";

export default function GameCard({
  difficulty,
}: {
  difficulty: "easy" | "medium" | "hard";
}) {
  let img_src;
  switch (difficulty) {
    case "easy":
      img_src = waldo_easy;
      break;
    case "medium":
      img_src = waldo_medium;
      break;
    case "hard":
      img_src = waldo_hard;
      break;
  }

  return (
    <div className="flex w-full flex-1 flex-col items-center rounded-lg border-2 border-teal-600/50 shadow-lg transition duration-300 hover:scale-[1.01] hover:shadow-xl">
      <img
        src={img_src}
        alt={`${difficulty} game mode`}
        className="aspect-video rounded-t-lg object-cover"
      />
      <div className="flex w-full flex-col items-center gap-4 rounded-b-lg border-t-2 border-teal-600/50 bg-white p-4">
        <p className="text-lg font-semibold capitalize">{difficulty}</p>
        <Link
          to={`/instructions/${difficulty}`}
          className="rounded bg-teal-600 px-3 py-1 text-white"
        >
          Select
        </Link>
      </div>
    </div>
  );
}
