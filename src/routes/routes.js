import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "../pages/dashboard";
const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
};
export default PublicRoutes;
