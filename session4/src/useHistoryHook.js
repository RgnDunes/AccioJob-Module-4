import React from "react";

import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

import "./App.css";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <PageOne />
          </Route>
          <Route path="/pagetwo">
            <PageTwo />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
