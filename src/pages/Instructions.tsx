import { Link } from "react-router-dom";
import GoalCard from "../components/GoalCard";

export default function Instructions() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-semibold">
        You need to find these three characters or objects:
      </h1>
      <div className="flex gap-2">
        <GoalCard />
        <GoalCard />
        <GoalCard />
      </div>
      <Link
        to="/"
        className="rounded bg-teal-600 px-3 py-1 text-2xl text-white"
      >
        Start
      </Link>
    </div>
  );
}
