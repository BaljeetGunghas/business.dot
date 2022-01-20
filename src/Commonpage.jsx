import React from "react";
import { NavLink } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import Img1 from './img/slid1.jpg';

const ComnPage = (props) => {
  return (
    <>
      <div className="container-fluid nav-bg  aboutcss">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className=" row d-flex align-items-center mt-5 mb-3 ">
              <div className=" col-md-6 pt-5 pt-lg-0 order-1 order-lg-1 d-flex justify-content-center flex-column">
                <h1 className=" mt-5"> {props.hedf} </h1>
                <h3 className="grow_business"> {props.heds} <strong> {props.span} </strong> </h3>
                <h5 className=" text-capitalize mb-4"> {props.hedt} </h5>
                <NavLink to= {props.visit} className="text-center get_started"> {props.btnName} </NavLink>
              </div>
              <div  className="col-md-6 col-sm-11 pt-5 pt-lg-0 order-1 order-lg-1 text-end abutimg" >
                <img className=" mt-4 col-sm-11 svgimg" src= {props.imgsrc} alt="svg img"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default ComnPage;
