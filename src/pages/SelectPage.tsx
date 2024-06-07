import GameCard from "../components/GameCard";

export default function SelectPage() {
  return (
    <div className="test-border m-auto flex w-full max-w-screen-xl flex-col items-center">
      <h1 className="mb-8 text-3xl font-semibold">Choose a Game</h1>
      <div className="flex w-full flex-col flex-wrap justify-center gap-4 md:flex-row">
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </div>
  );
}
