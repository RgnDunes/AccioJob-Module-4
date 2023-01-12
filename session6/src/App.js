import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import Component1 from "./Component1";

const App = () => {
  return (
    <div>
      App
      <QueryClientProvider client={new QueryClient()}>
        <Component1 />
        {/* <Component2 /> */}
      </QueryClientProvider>
    </div>
  );
};

export default App;
