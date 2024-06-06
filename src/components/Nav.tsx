export default function Nav() {
  return (
    <nav className="bg-blue-200 p-4">
      <ul className="test-border m-auto flex max-w-screen-xl justify-between">
        <li>
          <a href="/" className="text-xl font-bold">
            Where's Waldo?
          </a>
        </li>
        <li>
          <a href="/">
            <p>Leaderboards</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
