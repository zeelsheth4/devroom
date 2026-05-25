"use client";

import { useState } from "react";

type Props = {
  title: string;
  description: string;
  skills: string;
};

export default function ProjectCard({
  title,
  description,
  skills,
}: Props) {
  const [joined, setJoined] = useState(false);

  const [members, setMembers] = useState(1);

  const handleJoin = () => {
    if (!joined) {
      setJoined(true);

      setMembers(members + 1);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="text-zinc-400 mt-4">
        {description}
      </p>

      <div className="mt-5">
        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
          {skills}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-zinc-400">
          👥 {members} Members
        </p>

        <button
          onClick={handleJoin}
          className={`px-5 py-2 rounded-lg text-white ${
            joined
              ? "bg-green-600"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {joined ? "Joined" : "Join Project"}
        </button>
      </div>
    </div>
  );
}