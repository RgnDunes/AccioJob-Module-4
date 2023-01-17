import React from "react";
import TodoCount from "./TodoCount";

import useStore from "./todoStore";

const AddTodo = (props) => {
  const { todos, setTodos } = useStore((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = e.target.elements.todo.value;
    setTodos(todo);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" id="todo" />
        <button type="submit">Add Todo</button>
      </form>
      <TodoCount />
    </>
  );
};

export default AddTodo;
