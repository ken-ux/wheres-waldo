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
    <div className="test-border flex w-full flex-1 flex-col items-center gap-2">
      <img
        src={img_src}
        alt={`${difficulty} game mode`}
        className="aspect-video object-cover"
      />
      <p className="text-lg">Game Title</p>
      <Link
        to={`/instructions/${difficulty}`}
        className="rounded bg-teal-600 px-3 py-1 text-white"
      >
        Select
      </Link>
    </div>
  );
}
