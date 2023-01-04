import React, { useState } from "react";

export const useAsyncState = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const asyncSetState = (value) => {
    return new Promise((resolve) => {
      setState(value);

      setState((current) => {
        resolve(current);
        return current;
      });
    });
  };

  return [state, asyncSetState];
};
