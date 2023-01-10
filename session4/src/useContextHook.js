import React, { useState } from "react";

import FontSizeContext from "./context";

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

import "./App.css";

const App = () => {
  const [size, setSize] = useState(16);

  return (
    <div>
      <FontSizeContext.Provider value={size}>
        <PageOne />
        <PageTwo />
        <button
          onClick={() => {
            setSize(size + 5);
          }}
        >
          Increase font size
        </button>
        <button
          onClick={() => {
            setSize(Math.min(11, size - 5));
          }}
        >
          Decrease font size
        </button>
      </FontSizeContext.Provider>
    </div>
  );
};

export default App;
