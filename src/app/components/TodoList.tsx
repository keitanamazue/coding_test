import { Task } from "@/types/tasks";
import { Dispatch, SetStateAction } from "react";
import Todo from "./Todo";

interface TodoListProps {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

export default function ToDoList({ tasks, setTasks }: TodoListProps) {
  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <Todo key={task.id} task={task} setTasks={setTasks} />
      ))}
    </ul>
  );
}
