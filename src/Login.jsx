import React from "react";

const Login = () => {
    return (
        <> <div className="container-fluid nav-bg mt-5">
            <div className="row ">
                <div className=" col-12  mx-auto">
                    <div className=" row  d-flex justify-content-center text-center mt-5">
                        <div className="col-5 cardclass mt-3">
                            <h1 className=" text-danger">Lon in</h1>
                            <div className=" mt-3 col-md-12 align-items-center text-start">
                                <div class="mb-3 ">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your email" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="inputPassword3" placeholder="Enter password" />
                                </div>
                                <div className=" text-end">
                                    <button type="submit" class="btn btn-primary me-2">Log in</button>
                                </div>
                                <a href="/" className=" mt-4 text-center">Forget Password</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Login;