// workaround is to use useEffect hook

import React, { useState, useEffect } from "react";

function Topic4() {
  const [inp, setInp] = useState("");
  const [consoledValue, setConsoledValue] = useState(inp);

  useEffect(() => {
    console.log("3 : ", consoledValue, inp);
  }, [consoledValue, inp]);

  const handleOnClick = () => {
    console.log("1 : ", consoledValue);
    setConsoledValue((prevValue) => {
      console.log("prevValue : ", prevValue);
      return inp;
    });
    console.log("2 : ", consoledValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inp}
        onChange={(e) => {
          // console.log("e : ", e);
          setInp(e.target.value);
        }}
      />
      <button onClick={handleOnClick}>Console me out!</button>
    </div>
  );
}

export default Topic4;
