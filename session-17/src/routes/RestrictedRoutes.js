import React from "react";

import { Outlet, Navigate } from "react-router-dom";

const RestrictedRoutes = () => {
  return (
    <>{localStorage.getItem("token") ? <Navigate to="/" /> : <Outlet />}</>
  );
};

export default RestrictedRoutes;
