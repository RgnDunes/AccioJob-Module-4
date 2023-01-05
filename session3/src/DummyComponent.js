import React from "react";

const DummyComponent = (props) => {
  return (
    <div>
      <li>
        {props.item.firstname} : {props.item.lastname}
      </li>
    </div>
  );
};

export default DummyComponent;
