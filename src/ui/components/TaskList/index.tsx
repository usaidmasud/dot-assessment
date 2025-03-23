import { Task } from "../../../models/Task";
import "./TaskList.scss";

interface TaskListProps {
  tasks: Task[];
  toggleTaskCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
}

export default function TaskList({
  tasks,
  toggleTaskCompletion,
  deleteTask,
}: TaskListProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            id={`task-${task.id}`}
            checked={task.completed} // Menandai checkbox sesuai status tugas
            onChange={() => toggleTaskCompletion(task.id)} // Toggle saat checkbox diubah
          />
          <label
            htmlFor={`task-${task.id}`}
            className="checkbox-circle"
          ></label>
          <span
            onClick={() => toggleTaskCompletion(task.id)} // Toggle saat judul diklik
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }} // Menambahkan cursor pointer
          >
            {task.title}
          </span>
          <button className="button-danger" onClick={() => deleteTask(task.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}
