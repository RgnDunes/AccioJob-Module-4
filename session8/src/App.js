import React, { useState } from "react";

// import { Routes, Route, Link, useRoutes } from "react-router-dom";

// import Home from "./Home";
// import BookList from "./BookList";
// import Book from "./Book";
// import NewBook from "./NewBook";
// import NotFound from "./NotFound";
// import BooksLayout from "./BooksLayout";

import CustomRoutes from "./RoutesType/CustomRoutes";

// const InitialBookList = [
//   {
//     id: 1,
//     name: "Arms And The Man",
//     author: "George Bernard Shaw",
//   },
//   {
//     id: 2,
//     name: "Merchant of Venice",
//     author: "William Shakespeare",
//   },
// ];

const App = () => {
  // const [bookList, setBookList] = useState(InitialBookList);

  // const element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/books",
  //     element: <BooksLayout bookList={bookList} />,
  //     children: [
  //       {
  //         index: true,
  //         element: <BookList />,
  //       },
  //       {
  //         path: ":id",
  //         element: <Book />,
  //       },
  //       {
  //         path: "new",
  //         element: <NewBook />,
  //       },
  //     ],
  //   },
  // ]);

  return (
    <div>
      <CustomRoutes />
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/books/random?n=32">Search Parameters</Link>
          </li>
        </ul>
      </nav> */}

      {/* {element} */}

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList bookList={bookList} />} />
        <Route path="/books/:id" element={<Book bookList={bookList} />} />
        <Route path="/books/new" element={<NewBook bookList={bookList} />} />

        <Route path="/books" element={<BooksLayout bookList={bookList} />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook setBookList={setBookList} />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </div>
  );
};

export default App;
