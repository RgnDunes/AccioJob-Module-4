import React from "react";

import "./Card.css";
import QuantityCounter from "../QuantityCounter/QuantityCounter";

const Card = ({ name, price, id, img }) => {
  return (
    <div className="card-box">
      <div className="card-body">
        <div className="card-img">
          <img src={img} />
        </div>
        <div className="card-item-name">{name}</div>
        <div className="card-item-price">{price}</div>

        <QuantityCounter />

        <button className="product-details-btn">More Details</button>
      </div>
    </div>
  );
};

export default Card;
