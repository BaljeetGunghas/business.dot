import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import Img1 from './img/slid1.jpg';
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <div className="container-fluid nav-bg aboutcss mt-5">
        <div className="row">
          <div className="col-11 mx-auto">
            <div className=" row d-flex  mt-5 mb-5 ">
              <div className=" col-md-6  order-1 order-lg-1 d-flex justify-content-center flex-column">
                <h1 className=" mt-1 text-capitalize"><strong className=" grow_business">Contact us</strong> any time any where </h1>
                <img className=" mt-1 abutimg" src='https://image.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg' alt="svg img"></img>
              </div>
              <div className="col-md-5 order-1 order-lg-1 m-lg-5 mb-5" >
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default Contact;
