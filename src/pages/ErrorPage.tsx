import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="mx-8 my-24 flex flex-col items-center gap-4 text-center">
      <h1 className="text-2xl">This page does not exist.</h1>
      <Link to="/" className="rounded bg-teal-600 px-3 py-1 text-lg text-white">
        Back to home.
      </Link>
    </div>
  );
}
