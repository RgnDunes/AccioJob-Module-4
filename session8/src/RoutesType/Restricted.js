import React from "react";

import { Outlet, Navigate } from "react-router-dom";

const Restricted = (props) => {
  return (
    <div>{props.isUserAuthenticated ? <Navigate to="/" /> : <Outlet />}</div>
  );
};

export default Restricted;
