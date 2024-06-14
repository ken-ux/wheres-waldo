import { useState, useEffect } from "react";
export default function Timer({
  gameOver,
  setTime,
}: {
  gameOver: boolean;
  setTime: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!gameOver) {
      const intervalId = setInterval(() => {
        setCount((c) => c + 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      setTime(count);
    }
  }, [gameOver, count, setTime]);

  return (
    <div>
      <h1 className="text-2xl">Timer: 00:00:00 {count}</h1>
    </div>
  );
}
