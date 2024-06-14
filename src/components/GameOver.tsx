import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function GameOver({ time }: { time: number }) {
  const { difficulty } = useParams();
  const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center bg-slate-800/90 text-white">
      <p className="mb-6 text-2xl">
        Congratulations! You finished this game in {time} seconds.
      </p>
      <form
        onSubmit={(e) => formHandler(e)}
        className="mb-6 flex flex-col items-center"
      >
        <label htmlFor="name" className="mb-2">
          Add your name to the leaderboards:
        </label>
        <input type="hidden" name="score" value={time} />
        <input type="hidden" name="difficulty" value={difficulty} />
        <div className="flex items-center gap-2">
          <input
            type="text"
            name="name"
            required
            className="rounded px-2 py-1 text-black"
          />
          <button type="submit" className="rounded bg-teal-600 px-3 py-1">
            Submit
          </button>
        </div>
      </form>
      <Link to="/" className="rounded bg-red-600 px-3 py-1">
        Restart
      </Link>
    </div>
  );
}
