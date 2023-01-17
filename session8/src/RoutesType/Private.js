import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Private = (props) => {
  return (
    <div>
      {props.isUserAuthenticated ? <Outlet /> : <Navigate to="/login" />}
    </div>
  );
};

export default Private;
