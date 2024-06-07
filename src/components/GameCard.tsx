import { Link } from "react-router-dom";

export default function GameCard() {
  return (
    <div className="test-border flex w-full flex-1 flex-col items-center gap-2">
      {/* <img src="" alt="" height="300" width="200" className="bg-slate-300" /> */}
      <p className="text-lg">Game Title</p>
      <Link
        to="/instructions"
        className="rounded bg-teal-600 px-3 py-1 text-white"
      >
        Start
      </Link>
    </div>
  );
}
