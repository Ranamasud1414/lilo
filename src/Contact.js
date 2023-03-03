import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    number: "",
    email: "",
    message: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const fromSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.name} and my Phone number is ${data.number} Email is ${data.email} And I Want to Say That ${data.message}`);
    setData({
      fullname: "",
      number: "",
      email: "",
      message: "",
    });
  };
  return (
    <div>
      <div className="my-5 text-center">
        <h1>Contact Me</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={fromSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input type="text" name="fullname" value={data.fullname} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Full Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input type="number" name="number" value={data.number} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Phone Number" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email
                </label>
                <input type="email" name="email" value={data.email} onChange={InputEvent} className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea className="form-control" name="message" value={data.message} onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
