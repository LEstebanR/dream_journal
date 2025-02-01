type CardProps = {
  title: string;
  content: string;
};

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white rounded shadow p-4 max-w-80 text-black">
      <h1 className="text-lg font-bold">{title}</h1>
      <p>{content}</p>
    </div>
  );
}
