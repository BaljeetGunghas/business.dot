import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// import Img1 from './img/slid1.jpg';
import { NavLink } from 'react-router-dom'


const Card = (props) => {
    return (
        <>
            <div className=" col-md-4 col-10 mx-auto">
                <div class="card">
                    <img src={props.imgSrc} class="card-img-top" alt="img" />
                    <div class="card-body">
                        <h5 class="card-title"> {props.title} </h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="/" class="btn btn-light">Learn More</NavLink>
                    </div>
                </div> 
            </div>
        </>
    )
};
export default Card;
