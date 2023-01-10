import React from "react";

import "./Notification.css";

const Notification = ({ message, type }) => {
  return (
    <div className={type === "success" ? "success" : "error"}>
      Status : {type === "success" ? message : "Error : " + message}
    </div>
  );
};

export default Notification;
