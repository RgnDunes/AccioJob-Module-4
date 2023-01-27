import React, { useState } from "react";

import "./Login.css";
import Button from "../ui/Button/Button";
import Input from "../ui/Input/Input";
import { axiosClient } from "../../axiosClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    name === "authEmail" ? setAuthEmail(value) : setAuthPassword(value);
  };

  const handleLoginSubmit = () => {
    const body = {
      email: authEmail,
      password: authPassword,
    };

    axiosClient.post("login", body).then((resp) => {
      if (resp && resp.data && resp.data.token) {
        window.localStorage.setItem("token", resp?.data?.token);
        navigate("/users");
      }
    });
  };

  return (
    <div className="login-container">
      <div className="login-body">
        <Input
          name="authEmail"
          value={authEmail}
          onChange={handleInputChange}
          label="Email : "
        />
        <Input
          name="authPassword"
          value={authPassword}
          onChange={handleInputChange}
          label="Password : "
        />
        <Button
          onClick={handleLoginSubmit}
          disabled={!authEmail || !authPassword}
          label="Login"
        />
      </div>
    </div>
  );
};

export default Login;
