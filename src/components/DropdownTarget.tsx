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
  let disabled = false;

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

  if (goalsCompleted !== undefined && goalsCompleted[id] === true) {
    disabled = true;
  }

  return (
    <div
      className={
        "test-border flex items-center " +
        (disabled ? "bg-red-200" : "bg-slate-100 hover:bg-slate-500")
      }
      onClick={disabled ? undefined : clickHandler}
    >
      <img src={image} alt={title} className="h-16 w-16" />
      <p className="p-4">{title}</p>
    </div>
  );
}
