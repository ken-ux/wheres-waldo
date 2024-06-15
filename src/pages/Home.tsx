import GameCard from "../components/GameCard";

export default function Home() {
  return (
    <div className="test-border m-auto flex w-full max-w-screen-xl flex-col items-center gap-8">
      <h1 className="text-2xl font-semibold md:text-3xl">Choose a Game</h1>
      <div className="flex w-full flex-col flex-wrap justify-center gap-4 md:flex-row">
        <GameCard difficulty="easy" />
        <GameCard difficulty="medium" />
        <GameCard difficulty="hard" />
      </div>
    </div>
  );
}
