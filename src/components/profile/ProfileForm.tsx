"use client";

import { useState } from "react";

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    uid: "test-user",
    name: "",
    bio: "",
    skills: "",
    github: "",
    portfolio: "",
    availability: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Profile Saved Successfully!");
      } else {
        alert("Failed to save profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
      <h1 className="text-3xl font-bold text-white mb-8">
        Developer Profile
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg"
        />

        <textarea
          name="bio"
          placeholder="Bio"
          onChange={handleChange}
          className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg h-32"
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills"
          onChange={handleChange}
          className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg"
        />

        <input
          type="text"
          name="github"
          placeholder="GitHub Link"
          onChange={handleChange}
          className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg"
        />

        <input
          type="text"
          name="portfolio"
          placeholder="Portfolio Link"
          onChange={handleChange}
          className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg"
        />

        <select
          name="availability"
          onChange={handleChange}
          className="w-full bg-zinc-800 border border-zinc-700 text-white p-4 rounded-lg"
        >
          <option value="">Select Availability</option>
          <option value="Available for Work">
            Available for Work
          </option>

          <option value="Hackathons">
            Hackathons
          </option>

          <option value="Open Source">
            Open Source
          </option>
        </select>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
          Save Profile
        </button>
      </form>
    </div>
  );
}