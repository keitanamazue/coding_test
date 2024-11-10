"use client";
import { Task } from "@/types/tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
import ToDoList from "./components/TodoList";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">
        Kakushin Gijutu Inc Coding Test
      </h1>
      <div className="w-full max-w-xl items-center justify-center mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <AddTask setTasks={setTasks} />
          <ToDoList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </main>
  );
}
