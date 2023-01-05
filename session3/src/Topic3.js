import React from "react";
import Topic1 from "./Topic1";
import Topic2 from "./Topic2";

// isLoggedIn -> true (user is logged in, show him Topic1 component)

const Topic3 = (props) => {
  // if user is logged out
  if (!props.isLoggedIn) return null;

  return <div>Happy New Year</div>;
};

export default Topic3;
