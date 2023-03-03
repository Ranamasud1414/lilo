import React from "react";
import Common from "./Common";
import web from "../src/img/office.svg.svg";

const Home = () => {
  return (
    <div>
      <Common name="This is Home Page" btn="Get Started" imgsrc={web} visit="/services" stylename={{ color: "#536DFE" }} style={{ backgroundColor: "#536DFE", border: "none" }} />
    </div>
  );
};

export default Home;
