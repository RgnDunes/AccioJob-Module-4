import React, { useState, useEffect } from "react";

import { useParams, useOutletContext } from "react-router-dom";

const Book = () => {
  const [selectedBook, setSelectedBook] = useState({});
  const params = useParams();
  const context = useOutletContext();

  useEffect(() => {
    // const fetchedbook = context.bookList
    //   .map((book) => {
    //     if (book.id === parseInt(params.id)) {
    //       return book;
    //     }
    //   })
    //   .filter(function (element) {
    //     return element !== undefined;
    //   });

    const fetchedbook = context.bookList.filter(
      (book) => book.id === parseInt(params.id)
    );

    setSelectedBook(fetchedbook[0]);
  }, []);

  return (
    <div>
      <h1>Book Detail</h1>
      <h2>NAME : {selectedBook?.name}</h2>
      <h3>AUTHOR: {selectedBook?.author}</h3>
    </div>
  );
};

export default Book;
