// Without using promise using a custom hook created

import React, { useState } from "react";

import { useStateWithCallback } from "./hooks/useStateWithCallback";

const Topic6 = () => {
  const [inp, setInp] = useState("");
  const [consoledValue, setConsoledValue] = useStateWithCallback(inp);

  const handleOnClick = () => {
    console.log("1 : ", consoledValue); // ""
    setConsoledValue(inp, (prevValue, inp) => {
      console.log("2 : ", prevValue); // Hola
    });
    console.log("3 : ", consoledValue); // ""
  };

  return (
    <div>
      <input
        type="text"
        value={inp}
        onChange={(e) => {
          setInp(e.target.value);
        }}
      />

      <button onClick={handleOnClick}>Console me out!</button>
    </div>
  );
};

export default Topic6;
