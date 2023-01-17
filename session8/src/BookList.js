import React from "react";

import { Link, useOutletContext } from "react-router-dom";

const BookList = () => {
  const context = useOutletContext();

  return (
    <div>
      {context.bookList.map((book) => {
        return (
          <div key={book.id}>
            <h2>NAME : {book.name}</h2>
            <h3>AUTHOR : {book.author}</h3>

            {/* <button>
              <Link to={`/books/${book.id}`}>Show</Link>
            </button> */}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
