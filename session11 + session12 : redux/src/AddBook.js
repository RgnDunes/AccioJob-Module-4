import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { ADD_BOOK } from "./reduxActions";

const AddBook = () => {
  // const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [author, setauthor] = useState("");
  const [page, setpage] = useState("");
  const [currency, setcurrency] = useState("");
  const [price, setprice] = useState("");

  const dispatch = useDispatch();

  const addBook = () => {
    dispatch({
      type: ADD_BOOK,
      payload: {
        // id,
        name,
        author,
        page,
        price,
        currency,
      },
    });
  };

  return (
    <div>
      <h2>AddBook</h2>

      {/* <input
        type="text"
        placeholder="ID : "
        value={id}
        onChange={(e) => {
          setid(e.target.value);
        }}
      /> */}
      <input
        type="text"
        placeholder="NAME : "
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="AUTHOR : "
        value={author}
        onChange={(e) => {
          setauthor(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="PAGE : "
        value={page}
        onChange={(e) => {
          setpage(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="PRICE : "
        value={price}
        onChange={(e) => {
          setprice(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="CURRENCY : "
        value={currency}
        onChange={(e) => {
          setcurrency(e.target.value);
        }}
      />
      <button onClick={addBook}>Add book</button>
    </div>
  );
};

export default AddBook;
