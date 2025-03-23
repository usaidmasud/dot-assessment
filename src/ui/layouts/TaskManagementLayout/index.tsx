import { Outlet } from "react-router";
import "./TaskManagementLayout.scss";
export default function TaskManagementLayout() {
  return (
    <div className="task-management-layout">
      <Outlet />
    </div>
  );
}
