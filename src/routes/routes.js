import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Dashboard } from "../pages/index";
import {
  Layout,
  Signup,
  Login,
  Operations,
  MyInvestment,
  Settings,
} from "../components";
const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/dashboard"
          element={<Layout>{/* <Dashboard /> */}</Layout>}
        ></Route>
        <Route
          path="/my-investment"
          element={
            <Layout>
              <MyInvestment />
            </Layout>
          }
        ></Route>
        <Route
          path="/operations"
          element={
            <Layout>
              <Operations />
            </Layout>
          }
        ></Route>
        <Route
          path="/wallet"
          element={<Layout>{/* <Operations /> */}</Layout>}
        ></Route>
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
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
