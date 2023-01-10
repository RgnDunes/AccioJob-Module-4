import React, { useEffect, useState, useReducer } from "react";

import axios from "axios";
import reducer, { ADD_TODO, REMOVE_TODO, COMPLETE_TODO } from "./reducer";

import "./App.css";

const initialStateValue = [
  {
    id: "1",
    text: "Item 1",
    completed: false,
  },
];

const App = () => {
  const [id, setId] = useState(0);
  const [text, setText] = useState("");

  const [dummyState, dispatch] = useReducer(reducer, initialStateValue);

  const addTodoItem = (e) => {
    e.preventDefault();
    const newId = id + 1;
    setId(newId);

    dispatch({
      type: ADD_TODO,
      id: newId,
      text: text,
    });
  };

  const removeTodo = (id) => {
    dispatch({
      type: REMOVE_TODO,
      id: id,
    });
  };

  const completeTodo = (id) => {
    dispatch({
      type: COMPLETE_TODO,
      id: id,
    });
  };

  return (
    <div>
      <form onSubmit={addTodoItem}>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit">+</button>
      </form>

      <div>
        {dummyState.map((todo) => {
          return (
            <div className="dflex">
              <p>{todo.text}</p>
              <span
                onClick={() => {
                  removeTodo(todo.id);
                }}
              >
                x
              </span>
              <span
                onClick={() => {
                  completeTodo(todo.id);
                }}
              >
                ✓
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
