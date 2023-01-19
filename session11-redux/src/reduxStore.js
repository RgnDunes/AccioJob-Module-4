import React from "react";

import { createStore } from "redux";

import { reduxReducer } from "./reduxReducer";

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
};

export const reduxStore = createStore(reduxReducer, INITIAL_STORE_DATA);
