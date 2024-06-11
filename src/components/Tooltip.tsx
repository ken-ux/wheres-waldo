export default function Tooltip({
  position,
  cursorRatio,
}: {
  position: { x: number; y: number };
  cursorRatio: number;
}) {
  // Scale the cursor size with the image.
  const cursorSize = 50 / cursorRatio;

  // Recalculate the cursor positions so that the tooltip is rendered in the center
  //  of the mouse click instead of to the top left.
  const centeredPositionX = position.x - cursorSize / 2;
  const centeredPositionY = position.y - cursorSize / 2;

  return (
    <div
      className="absolute"
      style={{ left: centeredPositionX, top: centeredPositionY }}
    >
      <div
        className="rounded-full bg-slate-200"
        style={{ height: cursorSize, width: cursorSize }}
      >
        {position.x}, {position.y}
      </div>
    </div>
  );
}
