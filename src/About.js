import React from "react";
import Common from "./Common";
import web from "../src/img/about.svg";

const About = () => {
  return (
    <div>
      <Common name="This is About Page" btn="Explore More" imgsrc={web} visit="/Services" style={{ backgroundColor: "#00BFA6", border: "none" }} stylename={{ color: "#00BFA6" }} />
    </div>
  );
};

export default About;
