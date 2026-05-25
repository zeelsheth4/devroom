"use client";

import { useState } from "react";

type Props = {
  onAddTask: (task: {
    title: string;
  }) => void;
};

export default function CreateTaskForm({
  onAddTask,
}: Props) {
  const [title, setTitle] = useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onAddTask({ title });

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-4 mb-8"
    >
      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
        className="flex-1 bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg"
      />

      <button className="bg-blue-600 text-white px-6 rounded-lg">
        Add
      </button>
    </form>
  );
}