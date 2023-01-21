import React from "react";

import { createStore } from "redux";
import { applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { reduxReducer } from "./reduxReducer";
import { usersReducer } from "./usersReducer";
import { customMiddleware } from "./customMiddleware";

export const INITIAL_STORE_DATA = {
  noOfBooks: 2,
  bookList: [
    {
      id: 1,
      name: "Merchant of Venice",
      author: "William Shakespeare",
      page: 500,
      price: 250,
      currency: "Rupees",
    },
    {
      id: 2,
      name: "Arms and the Man",
      author: "George Bernard Shaw",
      page: 200,
      price: 350,
      currency: "Dollar",
    },
  ],
  noOfUsers: 0,
  usersList: [],
};

const rootReducer = combineReducers({
  reduxReducer,
  usersReducer,
});

export const reduxStore = createStore(
  rootReducer,
  INITIAL_STORE_DATA,
  composeWithDevTools(applyMiddleware(customMiddleware, thunk))
);
