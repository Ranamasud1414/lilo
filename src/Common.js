import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <div>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className=" col-10 mx-auto">
              <div className="row lol ">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 d-flex justify-content-center flex-column">
                  <h1 className="">
                    {props.name}
                    <br /> with{" "}
                    <strong className="Brandname" style={props.stylename}>
                      Masud
                    </strong>
                  </h1>
                  <h2 className="my-3">We are the team who are making websites</h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-primary" style={props.style}>
                      {props.btn}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header_img d-flex justify-content-center ">
                  <img src={props.imgsrc} className="img_fluid animated" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Common;
