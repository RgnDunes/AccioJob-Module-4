import React from "react";
import "./Card.css";

const Card = ({ headerText, imageSrc, progress, range }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-image">
          <img src={imageSrc} alt="Some Image" />
        </div>
        <h1 className="card-header-text">{headerText}</h1>
      </div>
      <div className="card-progress">Progress : {progress}%</div>
      <h3>The range is {range}</h3>

      <div className="action-buttons-container">
        <button className="cancel-btn">Cancel</button>
        <button className="success-btn">Book</button>
      </div>
    </div>
  );
};

export default Card;
