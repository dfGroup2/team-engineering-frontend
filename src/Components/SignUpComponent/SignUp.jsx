import { useState } from 'react';
import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import '../../css/Login.css';
import dfxbackground from '../../images/dfx_background.png';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = props => {

    const [user, setUser] = useState({ email: '', firstName: '', lastName: '', username: '', password: '' });
    const navigate = useNavigate()
    const handleChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }

    const SignUp = async event => {
        event.preventDefault();
        const { email, firstName, lastName, username, password } = user;
        if (email && firstName && lastName && username && password) {
            const res = await axios.post(`${process.env.REACT_APP_DFXTRAURL}/api/auth/signup`, user)
            if (res.data.message === "Graduate User was registered successfully!") {
                navigate('/');
            }
        }
    }

    return (
        <div className="container card outer-div">
            <div className="row">
                <div className="not-background-image col-4">
                    <h3>Digital Futures</h3>
                    <p>Sign up for an account</p>

                    <form onSubmit={SignUp}>
                        <div className="">
                            <div className="form-inputs">
                                <label htmlFor="Email" className="col-4">Email</label>
                                <input type="email" name="email" className="col-6" onChange={handleChange} />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="FirstName" className="col-4">First name</label>
                                <input type="text" name="firstName" className="col-6" onChange={handleChange} />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="LastName" className="col-4">Last name</label>
                                <input type="text" name="lastName" className="col-6" onChange={handleChange} />
                            </div>
                             <div className="form-inputs">
                                <label htmlFor="Company" className="col-4">Username</label>
                                <input type="text" name="username" className="col-6" onChange={handleChange} />
                            </div>
                             <div className="form-inputs">
                                <label htmlFor="Company" className="col-4">Password</label>
                                <input type="password" name="password" className="col-6" onChange={handleChange} />
                            </div>
                        </div>
                        <input type="submit" value="Sign Up" className="btn btn-primary col-5 draft-btn" />
                    </form>
                    <p>Already have an account? <Link to="/">Login</Link></p>
                </div>
                <div className="col-8"><img src={dfxbackground} className="dfximage"></img></div>
            </div>
        </div >
    )
}

SignUp.propTypes = {

}

export default SignUp
