import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./Login.css";
import Input from "../ui/Input/Input";

const Login = () => {
  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleUpdate = (e) => {
    const { name, value } = e.target;

    name === "usernameState"
      ? setUsernameState(value)
      : setPasswordState(value);
  };

  const handleSubmit = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameState,
        password: passwordState,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setError("");
          localStorage.setItem("id", data.id);
          localStorage.setItem("token", data.token);

          navigate("/profile");
        }
      });
  };

  return (
    <div className="login-container">
      <div className="login-body">
        Login
        <Input
          name="usernameState"
          type="text"
          placeholder="Username : "
          value={usernameState}
          onChange={handleUpdate}
        />
        <Input
          name="passwordState"
          type="text"
          placeholder="Password : "
          value={passwordState}
          onChange={handleUpdate}
        />
        <button className="login-btn" onClick={handleSubmit}>
          Login
        </button>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Login;
