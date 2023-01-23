// Create the UI of Login Page  DONE
// API Integration for login  DONE
// store data in localStorage DONE
// Create the UI for Profile page   DONE
// Api Integration for Profile page   DONE
// User react-router-dom for Route management DONE
// Show error if any while login

import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Private from "./Private";
import Restricted from "./Restricted";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Restricted />}>
          <Route index element={<Login />} />
        </Route>

        <Route path="/" element={<Private />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
