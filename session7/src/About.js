import React from "react";

import { Link } from "react-router-dom";

const About = (props) => {
  console.log(props);

  return (
    <div>
      About
      <Link to="/about">About Page</Link>
      <Link to="/products/jhjhkbdakr763jv3j">Products Page</Link>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default About;
