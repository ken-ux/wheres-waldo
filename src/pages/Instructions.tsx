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
    </div>
  );
}
