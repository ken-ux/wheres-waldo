import { Link } from "react-router-dom";

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
          <Link to="/leaderboard">
            <p>Leaderboard</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
