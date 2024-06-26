import { useEffect, useState } from "react";
import { Leaderboard as LeaderboardType } from "../types";

export default function Leaderboard() {
  const [leaderboards, setLeaderboards]: [
    LeaderboardType[],
    React.Dispatch<React.SetStateAction<LeaderboardType[]>>,
  ] = useState([[{ name: "", score: 0 }]]);
  const [dataFetched, setDataFetched] = useState(false);
  const difficulties = ["easy", "medium", "hard"];

  useEffect(() => {
    // Fetch data for each leaderboard difficulty.
    async function getData() {
      const data = await Promise.all(
        ["easy", "medium", "hard"].map(async (difficulty) => {
          const response = await fetch(
            import.meta.env.VITE_SERVER +
              "/leaderboards?difficulty=" +
              difficulty,
          );
          return response.json();
        }),
      );
      setLeaderboards(data);
      setDataFetched(true);
    }

    getData();
  }, []);

  let tables;

  if (dataFetched) {
    tables = leaderboards.map((leaderboard, index) => (
      <div key={difficulties[index]} className="flex-1">
        <h2 className="py-4 text-xl font-semibold capitalize text-teal-600 md:text-2xl">
          {difficulties[index]}
        </h2>
        <table className="m-auto min-w-72 rounded-lg shadow-md">
          <thead className="text-white">
            <tr>
              <th className="rounded-tl-lg bg-teal-600">Rank</th>
              <th className="bg-teal-600">Name</th>
              <th className="rounded-tr-lg bg-teal-600">Time</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {leaderboard.map((score, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{score.name}</td>
                <td>
                  {(score.score / 60) % 60 > 1
                    ? Math.floor(score.score / 60) % 60
                    : "0"}
                  m{" "}
                  {score.score % 60 > 9
                    ? score.score % 60
                    : "0" + (score.score % 60)}
                  s
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ));
  } else {
    tables = <p>Data loading...</p>;
  }

  return (
    <div className="w-full max-w-screen-xl text-center">
      <h1 className="py-4 text-2xl font-semibold md:text-3xl">Leaderboard</h1>
      <div className="flex flex-wrap justify-evenly">{tables}</div>
    </div>
  );
}
