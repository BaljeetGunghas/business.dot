import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Card from "./Card";
import CardData from "./CardData";

const Service = () => {
  return (
    <>
      <div className=" col-10 mx-auto mt-5">
        <h2 className=" text-center text-danger mb-5">Our Service</h2>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className=" row gy-4">
              {
                CardData.map((val, index) => {
                  return <Card
                    title={val.title}
                    imgSrc={val.imgSrc}
                  />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
};
export default Service;
