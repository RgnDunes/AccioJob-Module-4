import React from "react";
import DisplayBooks from "./DisplayBooks";
import DeleteBook from "./DeleteBook";
import AddBook from "./AddBook";
import InitializeUser from "./InitializeUser";

const App = () => {
  return (
    <div>
      <InitializeUser />
      <DisplayBooks hola="hola" />
      {/* <DeleteBook />
      <AddBook /> */}
    </div>
  );
};

export default App;
