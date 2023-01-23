import React from "react";

import { Routes, Route } from "react-router-dom";

import ProductList from "./components/ProductList/ProductList";
import Cart from "./components/Cart/Cart";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default CustomRoutes;
