import React from "react";

import { useNavigate } from "react-router-dom";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="home-app-name">
        E-Commerce Website
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/productlist");
          }}
        >
          Products
        </button>
        <button
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart ()
        </button>
      </div>
    </div>
  );
};

export default Home;
