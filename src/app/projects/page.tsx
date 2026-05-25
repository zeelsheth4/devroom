"use client";

import { useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import CreateProjectForm from "@/components/projects/CreateProjectForm";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([
    {
      title: "AI Resume Builder",
      description:
        "Build resumes using AI and export PDF.",
      skills: "Next.js, Firebase",
    },
  ]);

  const handleAddProject = (
    project: {
      title: string;
      description: string;
      skills: string;
    }
  ) => {
    setProjects([...projects, project]);
  };

  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-white mb-10">
          Projects
        </h1>

        <CreateProjectForm
          onAddProject={handleAddProject}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={
                project.description
              }
              skills={project.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}