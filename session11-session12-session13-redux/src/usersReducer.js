import { INITIAL_STORE_DATA } from "./reduxStore";
import { DELETE_USER, INITIALIZE_USER } from "./reduxActions";

export const usersReducer = (state = INITIAL_STORE_DATA, action) => {
  switch (action.type) {
    case DELETE_USER:
      const newUsersList = state.usersList.filter(
        (user) => user.id !== parseInt(action.payload.id)
      );
      return {
        ...state,
        usersList: [...newUsersList],
      };

    case INITIALIZE_USER:
      return {
        ...state,
        noOfUsers: action.payload.usersCollection?.length,
        usersList: [...state.usersList, ...action.payload.usersCollection],
      };

    default:
      return state;
  }
};
