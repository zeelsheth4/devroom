import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-zinc-900 border-r border-zinc-800 p-5">
      <h1 className="text-3xl font-bold text-white mb-10">
        DevRoom
      </h1>

      <div className="flex flex-col gap-4">
        <Link
          href="/dashboard"
          className="text-zinc-300 hover:text-white"
        >
          Dashboard
        </Link>

        <Link
          href="/profile"
          className="text-zinc-300 hover:text-white"
        >
          Profile
        </Link>

        <Link
          href="/projects"
          className="text-zinc-300 hover:text-white"
        >
          Projects
        </Link>

        <Link
          href="/jobs"
          className="text-zinc-300 hover:text-white"
        >
          Jobs
        </Link>
        <Link
  href="/tasks"
  className="text-zinc-300 hover:text-white"
>
  Tasks
</Link>
<Link
  href="/ai-match"
  className="text-zinc-300 hover:text-white"
>
  AI Match
</Link>
      </div>
    </div>
  );
}