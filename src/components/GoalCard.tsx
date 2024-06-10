export default function GoalCard({
  image,
  title,
}: {
  image: string | undefined;
  title: string | undefined;
}) {
  return (
    <div className="test-border flex flex-1 flex-col gap-4 text-center">
      <img src={image} alt={title} className="aspect-square w-full" />
      <p>{title}</p>
    </div>
  );
}
