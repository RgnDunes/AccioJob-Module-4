import React, { useState } from "react";

import "./App.css";

import DummyComponent from "./DummyComponent";

const RenderingMultipleComponentsOrElements = (props) => {
  const [attendees, setAttendees] = useState([
    { firstname: "Kunal", lastname: "A" },
    { firstname: "Johnson", lastname: "B" },
    { firstname: "Dirvendra", lastname: "C" },
  ]);

  const [secondState, setsecondState] = useState([0, 1, 2, 6, 7]);

  const [inp, setInp] = useState({
    lastname: "",
    firstname: "",
  });

  const handleOnClick = () => {
    const updatedAttendees = [...attendees];
    updatedAttendees.push(inp);
    setAttendees(updatedAttendees);

    updatedAttendees.sort(function (a, b) {
      var keyA = new Date(a.updated_at),
        keyB = new Date(b.updated_at);
      // Compare the 2 dates
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  };

  return (
    <div>
      {secondState.map((item, idx) => {
        return (
          <li key={idx}>
            {item} : key={idx}
          </li>
        );
      })}
      {attendees.map((item, idx) => {
        return (
          <DummyComponent
            item={item}
            idx={idx}
            key={`${item.firstname}-${idx}`}
          />
        );
      })}
      <br />
      <br />
      <br />
      <div className="flex-box">
        <input
          className="input-box"
          type="text"
          value={inp.firstname}
          onChange={(e) => {
            const updatedInp = { ...inp };
            updatedInp.firstname = e.target.value;
            setInp(updatedInp);
          }}
        />
        <input
          className="input-box"
          type="text"
          value={inp.lastname}
          onChange={(e) => {
            const updatedInp = { ...inp };
            updatedInp.lastname = e.target.value;
            setInp(updatedInp);
          }}
        />
        &nbsp;
        <button
          className={props.isdarkMode ? "dark-button" : "light-button"}
          onClick={handleOnClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default RenderingMultipleComponentsOrElements;
