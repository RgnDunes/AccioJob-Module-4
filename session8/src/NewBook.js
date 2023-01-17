import React, { useState } from "react";
import { useOutletContext, useNavigate, Link } from "react-router-dom";

const NewBook = (props) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const context = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/books");
    const book = {
      id: context.bookList.length + 1,
      name: name,
      author: author,
    };
    const updatedList = [...context.bookList];
    updatedList.push(book);
    props.setBookList(updatedList);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      />
      <br />
      <button onClick={handleSubmit}>
        {/* <Link to="/books">Submit</Link> */}
        Submit
      </button>
    </div>
  );
};

export default NewBook;
