import React from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Products from "./Products";
import TopLayerComponent from "./TopLayerComponent";
import NotFound from "./NotFound";

const routes = [
  { path: "/", exact: true, label: () => <h2>Home</h2>, component: <Home /> },
  {
    path: "/about",
    exact: false,
    label: () => <h2>About</h2>,
    component: <About />,
  },
  {
    path: "/products/:id",
    exact: false,
    label: () => <h2>Products</h2>,
    component: <Products />,
  },
];

const App = () => {
  const isUserAuthenticated = false;

  const obj = { a: 1, b: 2 };

  return (
    <div>
      <TopLayerComponent />
      <Switch>
        {routes.map((route) => {
          return (
            <Route path={route.path} exact={route.exact}>
              {route.component}
            </Route>
          );
        })}
      </Switch>
    </div>
  );
};

export default App;
