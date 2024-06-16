// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function GoalCard({
  id,
  goalsCompleted,
  image,
  title,
}: {
  id?: 1 | 2 | 3;
  goalsCompleted?: { 1: boolean; 2: boolean; 3: boolean };
  image: string | undefined;
  title: string | undefined;
}) {
  const location = useLocation();
  let game_screen = false;

  if (location.pathname.includes("game")) {
    game_screen = true;
  }

  let completed = false;
  if (id && goalsCompleted) {
    completed = goalsCompleted[id];
  }

  return (
    <div
      className={
        game_screen
          ? // Styling for game page
            "test-border flex flex-1 items-center gap-2 bg-slate-50 " +
            (completed ? "text-lg" : "")
          : // Styling for instructions page
            "flex flex-1 flex-col rounded-lg text-center shadow-md outline outline-2 outline-teal-600/50"
      }
    >
      <img
        src={image}
        alt={title}
        className={
          game_screen ? "h-24 w-24" : "aspect-square w-full rounded-t-lg"
        }
      />
      <p
        className={
          game_screen
            ? // Styling for game page
              ""
            : // Styling for instructions page
              "flex h-full items-center justify-center rounded-b-lg border-t-2 border-teal-600/50 bg-white p-4 font-medium"
        }
      >
        {title}
      </p>
    </div>
  );
}
