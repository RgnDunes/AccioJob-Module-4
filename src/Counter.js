import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    if (counter < 20) setCounter(counter + 1);
  };

  const decrement = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const handleChange = (action) => {
    if (action === "add") setCounter(counter + 1);
    else if (action === "subtract") setCounter(counter - 1);
  };

  return (
    <div>
      <button
        onClick={() => {
          if (counter < 20) setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      Counter Value : {counter}
      <button onClick={() => handleChange("subtract")}>Decrement</button>
    </div>
  );
};

export default Counter;
