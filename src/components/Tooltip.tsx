import DropdownTargetGroup from "./DropdownTargetGroup";

export default function Tooltip({
  position,
  offsetPosition,
  cursorRatio,
  setTooltipOpen,
  goalsCompleted,
  setGoalsCompleted,
  setGameOver,
  setMessage,
}: {
  position: { x: number; y: number };
  offsetPosition: { x: number; y: number };
  cursorRatio: number;
  setTooltipOpen: React.Dispatch<React.SetStateAction<boolean>>;
  goalsCompleted: { 1: boolean; 2: boolean; 3: boolean };
  setGoalsCompleted: React.Dispatch<
    React.SetStateAction<{ 1: boolean; 2: boolean; 3: boolean }>
  >;
  setGameOver: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}) {
  // Scale the cursor size with the image.
  const cursorSize = 50 / cursorRatio;

  // Recalculate the cursor positions so that the tooltip is rendered in the center
  //  of the mouse click instead of to the top left.
  const centeredPositionX = offsetPosition.x - cursorSize / 2;
  const centeredPositionY = offsetPosition.y - cursorSize / 2;

  return (
    <div
      className="absolute flex flex-col"
      style={{ left: centeredPositionX, top: centeredPositionY }}
    >
      <div
        className="rounded-full border-4 border-dashed border-slate-500 bg-slate-500/40"
        style={{ height: cursorSize, width: cursorSize }}
      />
      <div className="divide-y-2 divide-teal-600 border-2 border-teal-600">
        <DropdownTargetGroup
          setTooltipOpen={setTooltipOpen}
          goalsCompleted={goalsCompleted}
          setGoalsCompleted={setGoalsCompleted}
          setGameOver={setGameOver}
          position={position}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
}
