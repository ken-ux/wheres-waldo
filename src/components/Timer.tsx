import { useState, useEffect } from "react";
export default function Timer({ gameOver }: { gameOver: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!gameOver) {
      const intervalId = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [gameOver]);

  return (
    <div>
      <h1 className="text-2xl">Timer: 00:00:00 {count}</h1>
    </div>
  );
}
