type Props = {
  title: string;
  value: string;
};

export default function DashboardCard({
  title,
  value,
}: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
      <h3 className="text-zinc-400 text-lg">
        {title}
      </h3>

      <p className="text-3xl font-bold text-white mt-3">
        {value}
      </p>
    </div>
  );
}