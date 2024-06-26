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
      console.log("effect called");
      setLeaderboards(data);
      setDataFetched(true);
    }

    getData();
  }, []);

  let tables;

  if (dataFetched) {
    tables = leaderboards.map((leaderboard, index) => (
      <div key={difficulties[index]}>
        <h2 className="capitalize">{difficulties[index]}</h2>
        <table className="test-border m-auto">
          <thead className="*:test-border">
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Time (seconds)</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((score, index) => (
              <tr key={index} className="*:test-border">
                <td>{index + 1}</td>
                <td>{score.name}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ));
  } else {
    tables = "Data loading...";
  }

  return (
    <div className="test-border w-full max-w-screen-xl text-center">
      <h1 className="text-3xl">Leaderboard</h1>
      {tables}
    </div>
  );
}
