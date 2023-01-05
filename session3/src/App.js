import "./App.css";
// import Topic3 from "./Topic3";
import RenderingMultipleComponentsOrElements from "./RenderingMultipleComponentsOrElements";

import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {/* <Topic3 isLoggedIn={isLoggedIn} /> */}
      <RenderingMultipleComponentsOrElements isdarkMode={true} />
    </div>
  );
}

export default App;
