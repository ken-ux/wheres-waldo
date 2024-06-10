export default function GoalCard({
  image,
  title,
}: {
  image: string | undefined;
  title: string | undefined;
}) {
  return (
    <div className="test-border">
      <img src={image} alt="" />
      <p>{title}</p>
    </div>
  );
}
