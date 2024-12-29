// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes } from "./flow/route";
import LoginPage from "./pages/login";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.link} // Make sure path is a string here
            element={route.component} // Ensure this is a valid React element
          />
        ))}
        {/* Default route */}
        <Route
          path="*"
          element={<LoginPage />} // Default route when no other match
        />
      </Routes>
    </Router>
  );
}

export default App;
