import React, { useState } from "react";

import ThemeContext from "./context";

import "./App.css";

import Home from "./Home";
import AboutInstructor from "./AboutInstructor";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`App-${theme}`}>
        <Home />
        <AboutInstructor />

        <button
          onClick={() => {
            theme === "light" ? setTheme("dark") : setTheme("light");
          }}
        >
          Turn on{theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
