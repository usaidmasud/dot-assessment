import { Outlet } from "react-router";
import "./MainLayout.scss";
export default function MainLayout() {
  return (
    <div className="main-layout">
      <Outlet />
    </div>
  );
}
