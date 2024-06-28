import { Link, useParams } from "react-router-dom";
import GoalCardGroup from "../components/GoalCardGroup";

export default function Instructions() {
  const { difficulty } = useParams();

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-center text-2xl font-semibold md:text-3xl">
        You need to find these{" "}
        <span className="text-teal-600">three characters</span>:
      </h1>
      <div className="flex w-full flex-col gap-4 sm:flex-row">
        <GoalCardGroup />
      </div>
      <Link
        to={`/game/${difficulty}`}
        className="rounded bg-teal-600 px-6 py-2 text-2xl text-white"
      >
        Start
      </Link>
    </div>
  );
}
