import React, { useContext } from "react";

import ThemeContext from "./context";

const AboutInstructor = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h2 className={`h2-${theme}`}>AboutInstructor</h2>
      <p className={`p-${theme}`}>Name : Divyansh Singh, Gender : Male</p>
    </div>
  );
};

export default AboutInstructor;
