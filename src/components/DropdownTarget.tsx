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
  let disabled = false;

  const clickHandler = () => {
    console.log(title);
    console.log(position?.x, position?.y);

    if (setTooltipOpen) {
      setTooltipOpen(false);
    }
    if (
      goalsCompleted !== undefined &&
      setGoalsCompleted !== undefined &&
      setGameOver !== undefined
    ) {
      const newGoalsCompleted = goalsCompleted;
      newGoalsCompleted[id] = true;
      setGoalsCompleted(newGoalsCompleted);
      if (goalsCompleted[1] && goalsCompleted[2] && goalsCompleted[3]) {
        setGameOver(true);
      }
    }
  };

  if (goalsCompleted !== undefined && goalsCompleted[id] === true) {
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
          className="h-16 w-16 border-r-2 border-r-teal-600"
        />
        <p className="p-4">{title}</p>
      </div>
    )
  );
}
