import React from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import "./index.scss";
import { useDispatch } from "react-redux";
import { toggleAuthenticated } from "../../../libs/redux/slices/auth.slice";
import { Link, useNavigate } from "react-router";
import { ROUTE_CONSTANT } from "../../../constants/route.constant";

export default function LoginPage() {
  const [credentials, setCredentials] = React.useState({
    username: "test",
    password: "test",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (credentials.username && credentials.password) {
      dispatch(toggleAuthenticated(true));
      navigate(ROUTE_CONSTANT.PRODUCT);
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div className="login-page">
      <h2 className="title">Login Page</h2>
      <p className="description">Welcome back! You've been missed!</p>
      <form className="mt-2" onSubmit={handleLogin}>
        <InputField
          onChange={(e) =>
            setCredentials({
              ...credentials,
              username: e,
            })
          }
          value={credentials.username}
          placeholder="Username"
        />
        <InputField
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e,
            })
          }
          value={credentials.password}
          placeholder="Password"
          type="password"
        />
        <Button block>Sign in</Button>
      </form>
      <div className="back-home">
        <Link to={ROUTE_CONSTANT.HOME}>Back to Home</Link>
      </div>
    </div>
  );
}
