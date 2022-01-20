import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import ComnPage from "./Commonpage";

const About = () => {
  return (
    <>
      <ComnPage
        hedf='Welcome to About page'
        heds="Grow your"
        span='Business'
        hedt='we are the team of most tallented devloper'
        imgsrc='https://mybillbook.in/static-assets/images/landing-page/landing-hero-image.webp'
        visit='/contact'
        btnName='Contact Now'
      />
    </>
  )
};
export default About;
