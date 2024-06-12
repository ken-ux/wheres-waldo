import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import GoalCardGroup from "../components/GoalCardGroup";

export default function Instructions() {
  const { difficulty } = useParams();

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-semibold">
        You need to find these three characters or objects:
      </h1>
      <div className="flex w-full flex-col gap-2 sm:flex-row">
        <GoalCardGroup />
      </div>
      <Link
        to={`/game/${difficulty}`}
        className="rounded bg-teal-600 px-3 py-1 text-2xl text-white"
      >
        Start
      </Link>
    </div>
  );
}
