import React, { useRef } from "react";
import { Link } from "react-router";
import { initialTaskValues } from "../../../constants/initialTaskValues";
import { ROUTE_CONSTANT } from "../../../constants/route.constant";
import { Task } from "../../../models/Task";
import InputFieldButton from "../../components/InputFieldButton";
import TaskList from "../../components/TaskList";

export default function TaskManagementPage() {
  const [tasks, setTasks] = React.useState<Task[]>(initialTaskValues);
  const [taskTitle, setTaskTitle] = React.useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addTask = () => {
    if (taskTitle.trim() === "") return;

    setTasks([
      ...tasks,
      {
        id: Date.now(),
        title: taskTitle,
        completed: false,
        updatedAt: new Date(),
      },
    ]);

    setTaskTitle("");
    inputRef.current?.focus();
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="mt-2">
      <div className="mb-1">
        <h2 className="text-center">Simple Task Management</h2>
      </div>

      <InputFieldButton
        onChange={setTaskTitle}
        value={taskTitle}
        buttonText="Add Task"
        onSubmit={addTask}
        placeholder="Enter task title"
        inputRef={inputRef as React.RefObject<HTMLInputElement>}
      />
      <div className="mt-1">
        <TaskList
          tasks={tasks}
          toggleTaskCompletion={toggleTaskCompletion}
          deleteTask={deleteTask}
        />
      </div>
      <div className="mt-1 text-center">
        <Link to={ROUTE_CONSTANT.HOME}>Back to Home</Link>
      </div>
    </div>
  );
}
