import React from "react";

import { Outlet, Navigate } from "react-router-dom";

const Restricted = () => {
  return (
    <>{localStorage.getItem("token") ? <Navigate to="/" /> : <Outlet />}</>
  );
};

export default Restricted;
