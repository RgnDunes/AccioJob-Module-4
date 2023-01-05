import { useState } from "react";

export const useAsyncState = (initialValue) => {
  const [customHookState, setCustomHookState] = useState(initialValue);

  const asyncSetState = (value, callback) => {
    var promise = new Promise((resolve) => {
      setCustomHookState(value);
      resolve(value);
    });

    promise.then((value) => callback(value));
  };

  return [customHookState, asyncSetState];
};
