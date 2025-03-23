import { JSX, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../hooks/redux.hook";
interface Props {
  element: JSX.Element;
}

export default function ProtectedRoute({ element }: Props) {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated) {
    return element;
  } else {
    return (
      <div className="w-full h-full flex items-center justify-center">
        Loading...
      </div>
    );
  }
}
