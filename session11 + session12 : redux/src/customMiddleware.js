import { ADD_BOOK } from "./reduxActions";

export const customMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const store = getState();
    if (action.type === ADD_BOOK) {
      action.payload.id = store.noOfBooks + 1;
    }

    const returnVal = next(action);
    return returnVal;
  };
};
