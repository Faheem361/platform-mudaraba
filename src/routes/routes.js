import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../components/login/login";
import Dashboard from "../pages/dashboard";
import Layout from "../components/sideMenu/drawer";
import Signup from "../components/signup/signup";

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route exact path="/" element={<Login />}></Route>
      </Routes>
    </Router>
  );
};
export default PublicRoutes;
