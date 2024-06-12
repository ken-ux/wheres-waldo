export default function DropdownTarget({
  image,
  title,
  setTooltipOpen,
}: {
  image: string | undefined;
  title: string | undefined;
  setTooltipOpen: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}) {
  return (
    <div
      className="test-border flex items-center bg-slate-100 hover:bg-slate-500"
      onClick={() => (setTooltipOpen ? setTooltipOpen(false) : "")}
    >
      <img src={image} alt={title} className="h-16 w-16" />
      <p className="p-4">{title}</p>
    </div>
  );
}
