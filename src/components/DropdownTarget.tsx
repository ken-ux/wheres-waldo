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
}: {
  id: 1 | 2 | 3;
  image: string | undefined;
  title: string | undefined;
  setTooltipOpen: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  goalsCompleted: { 1: boolean; 2: boolean; 3: boolean } | undefined;
  setGoalsCompleted:
    | React.Dispatch<
        React.SetStateAction<{ 1: boolean; 2: boolean; 3: boolean }>
      >
    | undefined;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  position: { x: number; y: number } | undefined;
}) {
  const { difficulty } = useParams();
  let disabled = false;

  const clickHandler = async () => {
    const boundary = 50;
    const response = await fetch(
      `${import.meta.env.VITE_SERVER}/goal?difficulty=${difficulty}&desc=${title}`,
    );
    const data = await response.json();

    if (setTooltipOpen) {
      setTooltipOpen(false);
    }

    if (goalsCompleted && setGoalsCompleted && setGameOver && position) {
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
      }
      if (goalsCompleted[1] && goalsCompleted[2] && goalsCompleted[3]) {
        setGameOver(true);
      }
    }
  };

  if (goalsCompleted && goalsCompleted[id] === true) {
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
