import React, { useState } from "react";

// input box (DONE)
// submit button
// storage (state)
// display the list
// useEffect

const ToDo = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addToTodoList = () => {
    setInputValue("");
    const updatedTodoList = [...todoList];
    updatedTodoList.push(inputValue);
    setTodoList(updatedTodoList);
  };

  return (
    <div>
      <ul>
        {todoList.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />

      <button onClick={addToTodoList}>+ Add</button>
    </div>
  );
};

export default ToDo;
