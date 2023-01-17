import React from "react";
import AddTodo from "./AddTodo";

import { booksStore } from "./booksStore";
import TodoCount from "./TodoCount";

const BookList = () => {
  const { books } = booksStore((state) => state);

  return (
    <div>
      {books.map((book) => {
        return (
          <>
            <h2>Name : {book.name}</h2>
            <h3>Author : {book.author}</h3>
            <hr />
          </>
        );
      })}
      <AddTodo />
    </div>
  );
};

export default BookList;
