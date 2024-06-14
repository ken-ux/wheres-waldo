import { Link } from "react-router-dom";
export default function GameOver({ time }: { time: number }) {
  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center bg-slate-800/90 text-white">
      <p>Congratulations! You finished this game in {time} seconds.</p>
      <Link to="/" className="rounded bg-teal-600 px-3 py-1">
        Restart
      </Link>
    </div>
  );
}
