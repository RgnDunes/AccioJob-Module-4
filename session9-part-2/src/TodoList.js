import React from "react";

import useStore from "./todoStore";
import AddTodo from "./AddTodo";
import TodoCount from "./TodoCount";

const TodoList = () => {
  const { todos } = useStore((state) => state);

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
      <br />
    </div>
  );
};

export default TodoList;
