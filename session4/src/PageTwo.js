import React, { useContext } from "react";

import { useParams } from "react-router-dom";

import context from "./context";

const PageTwo = () => {
  const params = useParams();
  console.log(params);

  const size = useContext(context);
  return <div style={{ fontSize: `${size}px` }}>PageTwo</div>;
};

export default PageTwo;
