import { Link } from "react-router-dom";
import { TrophyIcon } from "@heroicons/react/24/solid";

export default function Nav() {
  return (
    <nav className="z-10 bg-teal-600 p-4 text-white shadow-md">
      <ul className="m-auto flex max-w-screen-xl items-center justify-between">
        <li>
          <Link to="/" className="text-xl font-bold">
            Where's Waldo?
          </Link>
        </li>
        <li>
          <Link to="/leaderboard" className="flex items-center gap-2">
            <p>Leaderboard</p>
            <TrophyIcon className="h-5 w-5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
