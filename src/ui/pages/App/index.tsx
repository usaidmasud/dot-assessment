import { useNavigate } from "react-router";
import "./App.scss";
import { ROUTE_CONSTANT } from "../../../constants/route.constant";
export default function App() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <button onClick={() => navigate(ROUTE_CONSTANT.TASK_MANAGEMENT)}>
        Task Management
      </button>
      <button onClick={() => navigate(ROUTE_CONSTANT.PRODUCT)}>
        E Commerce
      </button>
    </div>
  );
}
