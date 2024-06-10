// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function GoalCard({
  image,
  title,
}: {
  image: string | undefined;
  title: string | undefined;
}) {
  const location = useLocation();
  let game_screen = false;

  if (location.pathname.includes("game")) {
    game_screen = true;
  }

  return (
    <div
      className={
        game_screen
          ? "test-border flex flex-1 items-center gap-2"
          : "test-border flex flex-1 flex-col gap-4 text-center"
      }
    >
      <img
        src={image}
        alt={title}
        className={game_screen ? "h-24 w-24" : "aspect-square w-full"}
      />
      <p>{title}</p>
    </div>
  );
}
