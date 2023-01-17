import React, { useContext } from "react";

import ThemeContext from "./context";

const Home = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2 className={`h2-${theme}`}>Home</h2>
      <p className={`p-${theme}`}>
        This is the session 9 of F4 module at AccioJob. We will be learning
        about "Lifting state up".
      </p>
    </div>
  );
};

export default Home;
