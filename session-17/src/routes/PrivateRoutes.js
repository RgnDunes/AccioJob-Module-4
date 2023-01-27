import React from "react";

import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  return (
    <>{localStorage.getItem("token") ? <Outlet /> : <Navigate to="/" />}</>
  );
};

export default PrivateRoutes;
