import React, { useContext } from "react";

// import context from "./context";
import { useHistory } from "react-router-dom";

const PageOne = () => {
  const history = useHistory();
  //   const size = useContext(context);

  const moveToPage = () => {
    console.log(history);
    history.push("/pagetwo/2/shop");
  };

  return (
    <div
    // style={{ fontSize: `${size}px` }}
    >
      PageOne
      <button onClick={moveToPage}> Go to page two</button>
    </div>
  );
};

export default PageOne;
