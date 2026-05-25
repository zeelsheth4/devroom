"use client";

import { useState } from "react";

import Sidebar from "@/components/dashboard/Sidebar";
import CreateTaskForm from "@/components/tasks/CreateTaskForm";
import TaskCard from "@/components/tasks/TaskCard";

export default function TasksPage() {
  const [tasks, setTasks] = useState([
    { title: "Setup Dashboard UI" },
  ]);

  const handleAddTask = (
    task: { title: string }
  ) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold text-white mb-10">
          Tasks
        </h1>

        <CreateTaskForm
          onAddTask={handleAddTask}
        />

        <div className="space-y-5">
          {tasks.map((task, index) => (
            <TaskCard
              key={index}
              title={task.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}