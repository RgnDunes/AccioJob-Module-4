import React, { useState } from "react";

const Topic2 = () => {
  const [inp, setInp] = useState("");
  const [consoledValue, setConsoledValue] = useState(inp);

  const handleOnClick = async () => {
    console.log(consoledValue);
    await setConsoledValue(inp);
    console.log(consoledValue);
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
      <button onClick={handleOnClick}>Console me out! </button>
    </div>
  );
};

export default Topic2;
