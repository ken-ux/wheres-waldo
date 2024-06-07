import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="bg-blue-200 p-4">
      <ul className="test-border m-auto flex max-w-screen-xl justify-between">
        <li>
          <Link to="/" className="text-xl font-bold">
            Where's Waldo?
          </Link>
        </li>
        <li>
          <Link to="/">
            <p>Leaderboards</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
