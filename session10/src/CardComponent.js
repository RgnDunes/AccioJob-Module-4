import React from "react";

import CardNew from "./CardNew";
import CardHeaderText from "./CardHeaderText";
import CardImage from "./CardImage";
import CardProgress from "./CardProgress";
import CardActionButton from "./CardActionButton";

const CardComponent = () => {
  return (
    <>
      <CardNew>
        <CardImage url="" />
        <CardHeaderText headerText="Trip to Andaman" />
        <CardProgress>Progress : 60%</CardProgress>
        <h3>The range is 100%</h3>
        <CardActionButton />
      </CardNew>

      <div className="card">
        <CardImage url="" />
        <CardHeaderText headerText="Trip to Andaman" />
        <CardProgress>Progress : 60%</CardProgress>
        <h3>The range is 100%</h3>
        <CardActionButton />
      </div>
    </>
  );
};

export default CardComponent;
