import React from "react";

import { DELETE_USER } from "./reduxActions";

import { useSelector, useDispatch } from "react-redux";

const DisplayBooks = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleUserDelete = (userId) => {
    dispatch({ type: DELETE_USER, payload: { id: parseInt(userId) } });
  };

  return (
    <div>
      <h3>DisplayBooks</h3>
      {store.booksReducer.bookList.map((book) => {
        return (
          <div key={book.id}>
            <h4>Id : {book.id}</h4>
            <h5>Name : {book.name}</h5>
            <h6>Author : {book.author}</h6>
            <p>
              This book has {book.page} pages and will cost you around{" "}
              {book.price} {book.currency} in market.
            </p>
            <hr />
          </div>
        );
      })}
      <hr />
      <hr />
      {store.usersReducer.usersList.map((user) => {
        return (
          <div key={user.id}>
            <h4>User Name : {user.name}</h4>
            <button
              onClick={() => {
                handleUserDelete(user.id);
              }}
            >
              Delete User
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayBooks;
