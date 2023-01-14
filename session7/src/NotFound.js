import React from "react";

import { Redirect, useLocation } from "react-router-dom";

const NotFound = ({ isUserAuthenticated }) => {
  const location = useLocation();
  return (
    <div>
      {isUserAuthenticated ? (
        "NotFound"
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: location },
          }}
        />
      )}
    </div>
  );
};

export default NotFound;
