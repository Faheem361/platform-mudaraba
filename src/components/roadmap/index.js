import React from "react";
import Roadmap from "./roadmap";
import Roadcard from "./roadcard";
import "./roadmap.css";

function index() {
  return (
    <div className="mt-5">
      <Roadmap />
      <Roadcard />
    </div>
  );
}

export default index;
