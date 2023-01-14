import React from "react";

import { Link, useHistory, useLocation } from "react-router-dom";

const id = "jhjhkbdakr763jv3j";

const Home = () => {
  const history = useHistory();
  const location = useLocation();

  //   console.log("history : ", history);
  //   console.log("location : ", location);

  let { from } = location.state || { from: { pathname: "/" } };
  console.log({ from });

  return (
    <div>
      You were redirected from {from?.pathname}
      <br />
      Home
      <Link to="/about">About Page</Link>
      <Link to={`/products/${id}`}>Products Page</Link>
      <Link to="/">Home Page</Link>
      <button
        onClick={() => {
          history.push(`/products/${id}`);
        }}
      >
        {" "}
        Back
      </button>
    </div>
  );
};

export default Home;
