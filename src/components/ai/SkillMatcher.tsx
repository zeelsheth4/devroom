"use client";

import { useState } from "react";

export default function SkillMatcher() {
  const [skills, setSkills] =
    useState("");

  const [matches, setMatches] =
    useState<string[]>([]);

  const handleMatch = () => {
    const skillText =
      skills.toLowerCase();

    const results = [];

    if (skillText.includes("react")) {
      results.push(
        "Frontend Developer Project"
      );
    }

    if (skillText.includes("next")) {
      results.push(
        "Next.js SaaS Platform"
      );
    }

    if (skillText.includes("firebase")) {
      results.push(
        "Realtime Chat Application"
      );
    }

    if (skillText.includes("java")) {
      results.push(
        "Enterprise Backend System"
      );
    }

    setMatches(results);
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl">
      <h2 className="text-3xl font-bold text-white mb-8">
        AI Skill Matcher
      </h2>

      <input
        type="text"
        placeholder="Enter Skills"
        value={skills}
        onChange={(e) =>
          setSkills(e.target.value)
        }
        className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg"
      />

      <button
        onClick={handleMatch}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mt-5"
      >
        Match Projects
      </button>

      <div className="mt-8 space-y-4">
        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-black border border-zinc-700 p-4 rounded-lg text-white"
          >
            🚀 {match}
          </div>
        ))}
      </div>
    </div>
  );
}