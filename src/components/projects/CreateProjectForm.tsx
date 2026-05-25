"use client";

import { useState } from "react";

type Props = {
  onAddProject: (project: {
    title: string;
    description: string;
    skills: string;
  }) => void;
};

export default function CreateProjectForm({
  onAddProject,
}: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    onAddProject({
      title,
      description,
      skills,
    });

    setTitle("");
    setDescription("");
    setSkills("");
  };

  return (
    <div className="max-w-3xl bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
      <h2 className="text-3xl font-bold text-white mb-8">
        Create New Project
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg"
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
          className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg h-40"
        />

        <input
          type="text"
          placeholder="Required Skills"
          value={skills}
          onChange={(e) =>
            setSkills(e.target.value)
          }
          className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg"
        />

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Create Project
        </button>
      </form>
    </div>
  );
}