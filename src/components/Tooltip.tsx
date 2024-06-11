export default function Tooltip({
  position,
}: {
  position: { x: number; y: number };
}) {
  return (
    <div className="absolute" style={{ left: position.x, top: position.y }}>
      {position.x}, {position.y}
    </div>
  );
}
