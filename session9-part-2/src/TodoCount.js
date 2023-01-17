import React from "react";

import useStore from "./todoStore";

import TodoList from "./TodoList";

const TodoCount = () => {
  const { todos } = useStore((state) => state);

  return (
    <div>
      Total Todos : {todos?.length}
      <br />
      <TodoList />
    </div>
  );
};

export default TodoCount;
