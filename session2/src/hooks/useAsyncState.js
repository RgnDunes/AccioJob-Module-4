import { useState } from "react";

export const useAsyncState = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const asyncSetState = (value, callback) => {
    var promise = new Promise((resolve) => {
      setState(value);
      resolve(value);
    });

    promise.then((value) => callback(value));
  };

  return [state, asyncSetState];
};
