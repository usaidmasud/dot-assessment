import { Outlet } from "react-router";
import "./index.scss";

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <Outlet />
    </div>
  );
}
