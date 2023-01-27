import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer } from "./reducer";

export const INITIAL_VALUE = {};

export const store = createStore(reducer, INITIAL_VALUE, composeWithDevTools());
