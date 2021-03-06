import React from 'react'
import PropTypes from 'prop-types'
import '../../css/Login.css';
import dfxbackground from '../../images/dfx_background.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import ValidationServiceHelpers from '../../services/validation.serviceHelpers';


const Login = () => {

    const [user, setUser] = useState({ username: '', password: '' });
    const [message, setMessage] = useState(``);

    let navigate = useNavigate();

    const handleChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }

    const login = async event => {
        event.preventDefault();

        setMessage(``);

        const { username, password } = user;
        if (username && password) {
            try {

                const res = await axios.post(`${process.env.REACT_APP_DFXTRAURL}/api/auth/signin`, { username, password })
                localStorage.setItem('user', JSON.stringify(res.data));
                setUser({ username: '', password: '' });
                if (localStorage.getItem("user")) {
                    navigate(`/graduatePage`);
                }
                else {
                    console.log(res);
                    setMessage(res.message);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="container card outer-div" >
            <div className="row">

                <div className="not-background-image col-4">
                    <h3>Digital Futures</h3>
                    <p>Login to your account</p>

                    <form onSubmit={login} >
                        <div className="">
                            <div className="form-inputs">
                                <label htmlFor="Username" className="col-4">Username</label>
                                <input type="text" name="username" className="col-6" onChange={handleChange} validations={[ValidationServiceHelpers.required]} />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="Password" className="col-4">Password</label>
                                <input type="password" name="password" className="col-6" onChange={handleChange} validations={[ValidationServiceHelpers.required]} />
                            </div>
                        </div>
                        <input type="submit" value="Login" className="btn btn-primary col-5 draft-btn" />
                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">{message}</div>
                            </div>
                        )}
                    </form>
                    <p>Don't have an account? <Link to="/SignUp">Sign up</Link></p>

                </div>
                    <div className="col-8 image-container dfx-image" >
                    </div>
            </div>
        </div >
    )
}

Login.propTypes = {

}

export default Login
