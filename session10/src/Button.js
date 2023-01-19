import React from "react";

import "./Button.css";

// type -> success, error
// variant -> contained text

const Button = ({ type, variant, label }) => {
  return <button className={`${type} ${variant}`}>{label}</button>;
};

export default Button;
