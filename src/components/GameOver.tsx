import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function GameOver({ time }: { time: number }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { difficulty } = useParams();

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);

    // Extend typing to prevent errors when accessing values.
    const elements = e.currentTarget.elements as HTMLFormControlsCollection & {
      difficulty: HTMLInputElement;
      name: HTMLInputElement;
      score: HTMLInputElement;
    };

    // Get values and store in object.
    const formData = {
      difficulty: elements["difficulty"].value,
      name: elements["name"].value,
      score: Number(elements["score"].value),
    };

    // Send POST request to backend.
    try {
      const url = import.meta.env.VITE_SERVER + "/leaderboards";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setIsSubmitted(true);
      }
    } catch (error) {
      setIsDisabled(false);
      console.error("Error:", error);
    }
  };

  return (
    <div className="absolute flex h-full w-full flex-col items-center justify-center rounded-2xl bg-slate-800/90 text-white">
      <p className="mb-6 text-2xl">
        Congratulations! You found the characters in {Math.floor(time / 60)}{" "}
        minute(s) {time % 60} second(s).
      </p>
      {!isSubmitted ? (
        <form
          onSubmit={(e) => formHandler(e)}
          className="mb-6 flex flex-col items-center"
        >
          <label htmlFor="name" className="mb-2 text-lg">
            Add your name to the leaderboards:
          </label>
          <input type="hidden" name="score" value={time} />
          <input type="hidden" name="difficulty" value={difficulty} />
          <div className="flex items-center gap-2">
            <input
              id="name"
              type="text"
              name="name"
              required
              className="rounded px-2 py-1 text-black"
              autoComplete="given-name"
              maxLength={20}
            />
            <button
              type="submit"
              className="rounded bg-teal-600 px-3 py-1 disabled:bg-gray-500"
              disabled={isDisabled}
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <p className="mb-6 text-xl">Submitted!</p>
      )}
      <Link to="/" className="rounded bg-red-600 px-3 py-1">
        Restart
      </Link>
    </div>
  );
}
