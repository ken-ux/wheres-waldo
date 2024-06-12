export default function DropdownTarget({
  image,
  title,
}: {
  image: string | undefined;
  title: string | undefined;
}) {
  return (
    <div>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}
