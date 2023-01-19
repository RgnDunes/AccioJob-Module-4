import React from "react";

import Button from "./Button";

const CardActionButton = () => {
  return (
    <div className="action-buttons-container">
      <Button label="Cancel" variant="text" type="error" />
      <Button label="Schedule" variant="contained" type="success" />
    </div>
  );
};

export default CardActionButton;
