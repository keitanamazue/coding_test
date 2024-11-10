"use client";

import { Task } from "@/types/tasks";
import { PencilAltIcon, SaveIcon, TrashIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface TaskProps {
  task: Task;
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

export default function Todo({ task, setTasks }: TaskProps) {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskText, setEditedTaskText] = useState(task.text);

  useEffect(() => {
    if (isEditing) {
      // isEditingがtrueならinputにフォーカスを当てる
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = async () => {
    setTasks((prev) => {
      return prev.map((t) =>
        t.id === task.id ? { ...t, text: editedTaskText } : t
      );
    });
    setIsEditing(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTaskText(event.target.value);
  };

  const handleDelete = async () => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  };

  return (
    <li
      key={task.id}
      className="flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      {isEditing ? (
        <input
          ref={inputRef}
          value={editedTaskText}
          onChange={handleInputChange}
          className="mr-2 py-1 px-2 rounded border-gray-400 border"
        />
      ) : (
        <span className="text-gray-700">{task.text}</span>
      )}
      <div className="flex">
        {isEditing ? (
          <SaveIcon
            onClick={handleSaveButtonClick}
            className="h-5 w-5 text-blue-500 hover:text-blue-700 cursor-pointer mr-3"
          />
        ) : (
          <>
            <PencilAltIcon
              onClick={handleEditButtonClick}
              className="h-5 w-5 text-green-400 hover:text-green-700 cursor-pointer mr-3"
            />
          </>
        )}
        <TrashIcon
          onClick={handleDelete}
          className="h-5 w-5 text-red-500 hover:text-red-700 cursor-pointer"
        />
      </div>
    </li>
  );
}
