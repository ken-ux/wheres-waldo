import GameCard from "../components/GameCard";

export default function SelectPage() {
  return (
    <div className="test-border m-auto flex max-w-screen-xl flex-col items-center">
      <h1 className="text-2xl font-semibold">Choose a Game</h1>
      <GameCard />
    </div>
  );
}
