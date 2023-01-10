import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button className="button" onClick={props.validateFormData}>
      {props.label}
    </button>
  );
};

export default Button;
