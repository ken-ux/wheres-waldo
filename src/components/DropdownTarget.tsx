import { useParams } from "react-router-dom";

export default function DropdownTarget({
  id,
  image,
  title,
  setTooltipOpen,
  goalsCompleted,
  setGoalsCompleted,
  setGameOver,
  position,
  setMessage,
}: {
  id: 1 | 2 | 3;
  image: string | undefined;
  title: string | undefined;
  setTooltipOpen: React.Dispatch<React.SetStateAction<boolean>>;
  goalsCompleted: { 1: boolean; 2: boolean; 3: boolean };
  setGoalsCompleted: React.Dispatch<
    React.SetStateAction<{ 1: boolean; 2: boolean; 3: boolean }>
  >;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  position: { x: number; y: number };
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { difficulty } = useParams();
  let disabled = false;

  const clickHandler = async () => {
    const boundary = 50;
    setMessage("Checking your guess...");

    const response = await fetch(
      `${import.meta.env.VITE_SERVER}/goal?difficulty=${difficulty}&desc=${title}`,
    );
    const data = await response.json();

    setTooltipOpen(false);

    // Check if click was close enough to the answer.
    if (
      position.x < data.pos_x + boundary &&
      position.x > data.pos_x - boundary &&
      position.y < data.pos_y + boundary &&
      position.y > data.pos_y - boundary
    ) {
      const newGoalsCompleted = goalsCompleted;
      newGoalsCompleted[id] = true;
      setGoalsCompleted(newGoalsCompleted);
      setMessage("Correct!");
    } else {
      setMessage("Nope. They weren't there, try again.");
    }

    if (goalsCompleted[1] && goalsCompleted[2] && goalsCompleted[3]) {
      setGameOver(true);
    }
  };

  if (goalsCompleted[id] === true) {
    disabled = true;
  }

  return (
    !disabled && (
      <div
        className={"flex items-center bg-white hover:bg-slate-500"}
        onClick={clickHandler}
      >
        <img
          src={image}
          alt={title}
          className="w-1/4 border-r-2 border-r-teal-600"
        />
        <p className="p-4">{title}</p>
      </div>
    )
  );
}
