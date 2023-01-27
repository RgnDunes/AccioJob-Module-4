import { ADD_USERS_LIST } from "./actions";
import { INITIAL_VALUE } from "./index";

export const reducer = (state = INITIAL_VALUE, actions) => {
  switch (actions.type) {
    case ADD_USERS_LIST:
      return { ...actions.payload };
    default:
      return state;
  }
};
