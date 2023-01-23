import React, { useEffect, useCallback } from "react";

import { useDispatch, connect } from "react-redux";

import axios from "axios";
import { INITIALIZE_USER } from "./reduxActions";

const USERS_ENDPOINT = "https://jsonplaceholder.typicode.com/users";

const mapDispatchToProps = (dispatch) => {
  return {
    initializeUser: (newUsersList) => {
      return dispatch({
        type: INITIALIZE_USER,
        payload: { usersCollection: newUsersList },
      });
    },
  };
};

const InitializeUser = (props) => {
  const dispatch = useDispatch();

  const handleInitializeUsers = () => {
    dispatch((dispatch) => {
      axios
        .get(USERS_ENDPOINT)
        .then((response) =>
          response.data.map((user) => ({
            id: user.id,
            name: user.name,
            email: user.email,
          }))
        )
        .then((newUsersList) => {
          props.initializeUser(newUsersList);
        });
    });
  };

  return (
    <div>
      <button onClick={handleInitializeUsers}>Get Users</button>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(InitializeUser);
