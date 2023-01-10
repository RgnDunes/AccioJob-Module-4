import React, { useState, useEffect } from "react";

import * as EmailValidator from "email-validator";

import "./App.css";

function App() {
  // const [userName, setUserName] = useState("");
  // const [userEmail, setUserEmail] = useState("");
  // const [userPassword, setUserPassword] = useState("");
  // const [userConfPassword, setUserConfPassword] = useState("");

  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
    userConfPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState(
    "All the fields are mandatory"
  );

  useEffect(() => {
    validateFormData();
  }, [
    formData.userName,
    formData.userEmail,
    formData.userPassword,
    formData.userConfPassword,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    const updatedFormData = { ...formData };
    updatedFormData[name] = value;

    setFormData(updatedFormData);
  };

  const validateFormData = () => {
    setErrorMessage("All the fields are mandatory");

    if (formData.userName && formData.userEmail && formData.userPassword) {
      if (formData.userPassword === formData.userConfPassword) {
        if (!EmailValidator.validate(formData.userEmail))
          setErrorMessage("Email is invalid.");
        else setErrorMessage("");
      } else {
        setErrorMessage("Password and Confirm Password does not match.");
      }
    }
  };

  return (
    <div className="browser-window">
      <div className="form-body">
        <div className="legend">SignUp</div>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          placeholder="Full Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="userEmail"
          value={formData.userEmail}
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="userPassword"
          value={formData.userPassword}
          placeholder="Password"
          onChange={handleChange}
        />
        <input
          type="password"
          name="userConfPassword"
          value={formData.userConfPassword}
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        {errorMessage ? (
          <div className="error">Error: {errorMessage}</div>
        ) : (
          <div className="success">Successfully Signed Up!</div>
        )}

        <button onClick={validateFormData}>Signup</button>
      </div>
    </div>
  );
}

export default App;
