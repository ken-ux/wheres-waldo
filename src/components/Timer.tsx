import { ClockIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

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
    <div className="flex items-center justify-center gap-2 rounded-lg bg-teal-600 p-4 text-white">
      <ClockIcon className="h-8 w-8" />
      <h1 className="text-2xl">
        {(count / 60) % 60 > 1
          ? (count / 60 > 10 ? "" : "0") + (Math.floor(count / 60) % 60)
          : "00"}
        :{count % 60 > 9 ? count % 60 : "0" + (count % 60)}
      </h1>
    </div>
  );
}
