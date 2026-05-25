"use client";

import { useState } from "react";

type Props = {
  title: string;
};

export default function TaskCard({
  title,
}: Props) {
  const [completed, setCompleted] =
    useState(false);

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-5 rounded-xl flex items-center justify-between">
      <h2
        className={`text-white ${
          completed
            ? "line-through text-zinc-500"
            : ""
        }`}
      >
        {title}
      </h2>

      <button
        onClick={() =>
          setCompleted(!completed)
        }
        className={`px-4 py-2 rounded-lg text-white ${
          completed
            ? "bg-green-600"
            : "bg-blue-600"
        }`}
      >
        {completed
          ? "Completed"
          : "Mark Done"}
      </button>
    </div>
  );
}