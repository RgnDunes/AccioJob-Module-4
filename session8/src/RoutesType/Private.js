import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const Private = (props) => {
  return (
    <div>
      {props.isUserAuthenticated ? <Outlet /> : <Navigate to="/login" />}
      <Outlet />
    </div>
  );
};

export default Private;
