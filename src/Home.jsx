import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import Img1 from './img/slid1.jpg';
import ComnPage from "./Commonpage";


const Home = () => {
  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner slidh">
                <div className="carousel-item active">
                  <img src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="slid1" />
                  <div className="carousel-caption text-capitalize  d-md-block text-dark">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                  </div>
                </div>
                <div className="carousel-item slidh">
                  <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="slid3" />
                  <div className="carousel-caption text-capitalize  d-md-block text-dark">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item slidh">
                  <img src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="d-block w-100" alt="slid2" />
                  <div className="carousel-caption text-capitalize  d-md-block text-dark">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            {/* after slide here is next part */}
            <ComnPage
              hedf='We Execute our idea from start to end'
              heds="Grow your"
              span='Business'
              hedt='we are the team of most tallented devloper'
              imgsrc='https://vyaparwebsiteimages.vypcdn.in/share_gst_invoice.svg'
              visit='/Service'
              btnName='Get started'
              
            />
          </div>
        </div>
      </div>
    </>
  )
};
export default Home;
