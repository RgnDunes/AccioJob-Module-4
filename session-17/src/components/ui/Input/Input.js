import React from "react";

import "./Input.css";

const Input = ({ label, name, value, onChange }) => {
  return (
    <div className="input-container">
      <div className="input-label">{label}</div>
      <input
        className="input-box"
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};

export default Input;
