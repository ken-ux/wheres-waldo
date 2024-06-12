export default function DropdownTarget({
  id,
  image,
  title,
  setTooltipOpen,
  goalsCompleted,
  setGoalsCompleted,
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
}) {
  const clickHandler = () => {
    if (setTooltipOpen) {
      setTooltipOpen(false);
    }
    if (goalsCompleted !== undefined && setGoalsCompleted !== undefined) {
      const newGoalsCompleted = goalsCompleted;
      newGoalsCompleted[id] = true;
      setGoalsCompleted(newGoalsCompleted);
    }
    console.log(goalsCompleted);
  };

  return (
    <div
      className="test-border flex items-center bg-slate-100 hover:bg-slate-500"
      onClick={clickHandler}
    >
      <img src={image} alt={title} className="h-16 w-16" />
      <p className="p-4">{title}</p>
    </div>
  );
}
