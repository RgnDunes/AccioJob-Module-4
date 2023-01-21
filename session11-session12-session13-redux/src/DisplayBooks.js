import React from "react";

import { DELETE_USER } from "./reduxActions";

import { useSelector, useDispatch, connect } from "react-redux";

// const mapStateToProps = (state, ownProps) => {
//   console.log("STATE : ", state);
//   console.log("ownProps : ", ownProps);
//   return {
//     reduxStore: state,
//     ownProps: ownProps,
//   };
// };

const DisplayBooks = (props) => {
  const customEqualityFunction = (oldValue, newValue) => {
    console.log({ oldValue, newValue });
  };
  const store = useSelector((state) => state, customEqualityFunction);
  const dispatch = useDispatch();

  console.log("store : ", store);

  const handleUserDelete = (userId) => {
    dispatch({ type: DELETE_USER, payload: { id: parseInt(userId) } });
  };

  return (
    <div>
      <h3>DisplayBooks</h3>
      {store.reduxReducer.bookList.map((book) => {
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
// export default connect(mapStateToProps, null)(DisplayBooks);
