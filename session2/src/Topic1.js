import React, { useState } from "react";

const Topic1 = () => {
  const [someState, setSomeState] = useState("initialValue");

  const handleUpdate = () => {
    console.log(someState); // "initialValue"
    setSomeState(""); // let's say this was synchronous instead of asynchronous
    console.log(someState); // ""
  };

  return (
    <div>
      {someState}
      <button onClick={handleUpdate}>Click Me</button>
    </div>
  );
};

export default Topic1;
