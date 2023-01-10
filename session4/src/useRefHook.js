import React, { useRef, useEffect } from "react";

import "./App.css";

const App = () => {
  const ref = useRef("");
  console.log(ref);

  useEffect(() => {
    ref.current.style.fontStyle = "italic";
    ref.current.innerHTML = "Mein hoon jian";
  }, []);

  return (
    <div>
      <h1 ref={ref}>This is a heading</h1>
    </div>
  );
};

export default App;
