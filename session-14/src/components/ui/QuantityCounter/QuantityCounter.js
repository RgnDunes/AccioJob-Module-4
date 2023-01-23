import React from "react";

const QuantityCounter = () => {
  return (
    <div className="quantity-counter-box">
      <button>-</button>
      <input type="text" className="quantity-counter-input" value="1" />
      <button>+</button>
    </div>
  );
};

export default QuantityCounter;
