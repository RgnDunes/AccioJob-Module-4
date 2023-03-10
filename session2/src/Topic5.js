import React, { useState } from "react";
import { useAsyncState } from "./hooks/useAsyncState";

const Topic5 = () => {
  const [inp, setInp] = useState("");
  const [consoledValue, setConsoledValue] = useAsyncState(inp);

  const handleOnClick = async () => {
    console.log("1 : ", consoledValue); // ""
    await setConsoledValue(inp, (currentState) => {
      console.log("3 : ", currentState); // "Hola"
    });
    console.log("2 : ", consoledValue); // ""
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
      <button onClick={handleOnClick}> Console me out!</button>
    </div>
  );
};

export default Topic5;
