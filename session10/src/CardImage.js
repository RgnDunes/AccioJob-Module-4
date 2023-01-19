import React from "react";

const CardImage = ({ url }) => {
  return (
    <div className="card-image">
      <img src={url} alt="Some image" />
    </div>
  );
};

export default CardImage;
