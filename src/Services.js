import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
// import web from "../src/img/com.png";
// import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="my-5 ">
        <h1 className="text-center">Our Services</h1>
      </div>

      <div className="container d-flex justify-content-center">
        <div className="container row my-3 vertical-center-row ">
          {Sdata.map((val, ind) => {
            return (
              <div className="col-md-4 my-3  ">
                <Card key={ind} imgsrc={val.imgsrc} title={val.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
