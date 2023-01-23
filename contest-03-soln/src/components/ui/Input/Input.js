import React from "react";
import "./Input.css";

const Input = ({ placeholder, value, onChange, type, name }) => {
  return (
    <div className="input-container">
      <input
        name={name}
        className="input-box"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
