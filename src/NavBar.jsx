import React from 'react';
import { NavLink } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


const NavBar = () => {
    return (
        <>
            <div className="container-fluid nav-bg fixed-top">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light navcolor}">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand nav_heding" to="/">
                                    Business <span className='iqclass'>IQ</span>
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mb-2 mb-lg-0 m-lg-auto">
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeclassname='menu_active' aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeclassname='menu_active' to="/Service">Service</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" activeclassname='menu_active' to="/About">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink activeclassname='menu_active' className="nav-link"  to="/Contact">Contact</NavLink>
                                        </li>
                                    </ul>
                                    <ul className=" navbar-nav mb-2 mb-lg-0 mr-auto  ">
                                        {/* <a type="button" href='/contact' className="btn btn-link btn-outline-primary btn-sm mx-lg-1">Sine in</a> */}
                                        <NavLink className="sinein" to="/contact" role="button">Sine in</NavLink>
                                        <NavLink className="login btn-outline-danger" to="/Login" role="button">Log in</NavLink>
                                        {/* <button type="button" className="btn  btn-sm mx-lg-1"></button> */}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavBar;






