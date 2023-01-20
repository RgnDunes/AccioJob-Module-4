import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { DELETE_BOOK } from "./reduxActions";

const DeleteBook = () => {
  const [idToBeDeleted, setIdToBeDeleted] = useState("");

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({
      type: DELETE_BOOK,
      payload: {
        id: idToBeDeleted,
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        value={idToBeDeleted}
        onChange={(e) => {
          setIdToBeDeleted(e.target.value);
        }}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteBook;
