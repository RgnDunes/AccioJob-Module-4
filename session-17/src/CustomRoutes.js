import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Users from "./components/Users/Users";
import PrivateRoutes from "./routes/PrivateRoutes";
import RestrictedRoutes from "./routes/RestrictedRoutes";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RestrictedRoutes />}>
        <Route index element={<Login />} />
      </Route>
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default CustomRoutes;
