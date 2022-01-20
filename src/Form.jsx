import React, { useState } from "react";

const Form = () => {
    const [data, setdata] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        gender: '',

    })
    const changeEvent = (event) => {
        const {name, value} = event.target;
        setdata((prevalue) => {
            return {
                ...prevalue,
                [name]: value,
            };
        });
    };
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`name of the candidate is ${data.name} phone no is ${data.phone} email is ${data.email} gender is ${data.gender}
        your data is save sucessfully`)
    }

    return (
        <>
            <div className=" text-center">
                <h2 className="">
                    Create Account
                </h2>
            </div>
            <form className=" ml-auto">
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Name :</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" name="name" value={data.name} onChange={changeEvent} placeholder="Enter your name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Phone :</label>
                    <div className="col-sm-10">
                        <input type="number" className="form-control" name="phone" value={data.phone} onChange={changeEvent} placeholder="Enter your phone" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Email :</label>
                    <div className="col-sm-10">
                        <input type="email" className="form-control" name="email" value={data.email} onChange={changeEvent} onChange={changeEvent} placeholder="Enter your name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <label className="col-sm-2 col-form-label">Password:</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" name="password" value={data.password} onChange={changeEvent} placeholder="Create password" />
                    </div>
                </div>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Gender :</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" onChange={changeEvent}  value={data.gender} />
                            <label className="form-check-label" >
                                Male
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gender" value={data.gender} onChange={changeEvent} />
                            <label className="form-check-label" >
                                Femail
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio" name="gender" value={data.gender} onChange={changeEvent} />
                            <label className="form-check-label" >
                                Other
                            </label>
                        </div>
                    </div>
                </fieldset>
                <div className=" text-end">

                    <button type="submit" className="btn btn-primary" onClick={formSubmit}>Sign in</button>
                </div>
            </form>
        </>
    )
};
export default Form;



















