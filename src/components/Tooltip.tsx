export default function Tooltip({
  position,
}: {
  position: { x: number; y: number };
}) {
  return (
    <div className="absolute">
      {position.x}, {position.y}
    </div>
  );
}
