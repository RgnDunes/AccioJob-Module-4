import React, { useState } from "react";

import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Notification from "./components/Notification/Notification";

import "./App.css";

const emailValidationRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function App() {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userConfPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("All fields are mandatory.");

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFormData = { ...formData };
    updatedFormData[name] = value;

    setFormData(updatedFormData);
  };

  const validateFormData = () => {
    setErrorMessage("All fields are mandatory.");

    if (formData.userName && formData.userEmail && formData.userPassword) {
      if (formData.userPassword === formData.userConfPassword) {
        if (formData.userEmail.match(emailValidationRegex)) {
          setErrorMessage("");
        } else {
          setErrorMessage("Invalid email.");
        }
      } else {
        setErrorMessage("Passwords do not match.");
      }
    }
  };

  return (
    <div className="browser-window">
      <div className="form-body">
        <Input
          type="text"
          placeholder="Full Name"
          name="userName"
          onChange={handleChange}
          value={formData.userName}
        />
        <Input
          type="email"
          placeholder="Email"
          name="userEmail"
          onChange={handleChange}
          value={formData.userEmail}
        />
        <Input
          type="password"
          placeholder="Password"
          name="userPassword"
          onChange={handleChange}
          value={formData.userPassword}
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="userConfPassword"
          onChange={handleChange}
          value={formData.userConfPassword}
        />
        <Notification
          message={errorMessage ? errorMessage : "Successfully Signed Up"}
          type={errorMessage ? "error" : "success"}
        />
        <Button label="SignUp" validateFormData={validateFormData} />
      </div>
    </div>
  );
}

export default App;
