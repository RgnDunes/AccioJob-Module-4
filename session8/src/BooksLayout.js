import React from "react";
import { Outlet, Link } from "react-router-dom";

const obj = { hello: "worlds" };

const BooksLayout = (props) => {
  return (
    <div>
      <nav>
        <li>
          {" "}
          <Link to="/books/1">Book 1</Link>
        </li>
        <li>
          {" "}
          <Link to="/books/2">Book 2</Link>
        </li>
        {/* <li>
          {" "}
          <Link to="/books/new">New Book</Link>
        </li> */}
      </nav>
      <Outlet context={{ bookList: props.bookList }} />
    </div>
  );
};

export default BooksLayout;
