import React from "react";

import { Routes, Route, Link, useRoutes } from "react-router-dom";
import Book from "../Book";
import BookList from "../BookList";
import BooksLayout from "../BooksLayout";
import Home from "../Home";
import NewBook from "../NewBook";
import NotFound from "../NotFound";
import ForgotPassword from "./ForgotPassword";
import Login from "./Login";
import Private from "./Private";
import Restricted from "./Restricted";

const bookList = [
  {
    id: 1,
    name: "Arms And The Man",
    author: "George Bernard Shaw",
  },
  {
    id: 2,
    name: "Merchant of Venice",
    author: "William Shakespeare",
  },
];

const CustomRoutes = () => {
  const isUserAuthenticated = false;
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Restricted isUserAuthenticated={isUserAuthenticated} />}
        >
          {" "}
          {/*Restricted Routes*/}
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route
          path="/"
          element={<Private isUserAuthenticated={isUserAuthenticated} />}
        >
          {" "}
          {/*Private Routes*/}
          <Route index element={<Home />} />
          <Route path="/books" element={<BooksLayout bookList={bookList} />}>
            <Route index element={<BookList />} />
            <Route path=":id" element={<Book />} />
            {/* <Route path="new" element={<NewBook setBookList={setBookList} />} /> */}
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default CustomRoutes;
