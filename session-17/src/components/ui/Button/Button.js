import React from "react";

import "./Button.css";

const Button = ({ disabled, onClick, label }) => {
  return (
    <button
      className={`login-btn ${disabled}`}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
