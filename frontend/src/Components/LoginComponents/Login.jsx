import React from 'react'
import PropTypes from 'prop-types'
import '../../css/Login.css';
import dfxbackground from '../../images/dfx_background.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setLoginUser }) => {

    const [user, setUser] = useState({ email: '', username: '', password: '' });
    const [loggedIn, setLoggedIn] = useState(false);

    const handleChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }

    const login = async event => {
        event.preventDefault();
        const { username, password } = user;
        if (username && password) {
            const res = await axios.post(`${process.env.REACT_APP_DFXTRAURL}/api/auth/signin`, { username, password })
            setLoggedIn(res.data ? true : false);
            localStorage.setItem('user', JSON.stringify(res.data));
            setUser({ email: '', username: '', password: '' });
            setLoginUser(res.data);
            if (loggedIn) {
                //useNavigate('/')
            }
        }
    }

    return (
        <div className="container card">
            <div className="row">
                <div className="background-image" style={{ backgroundImage: `url(${dfxbackground})` }}
                >
                </div>
                <div className="not-background-image col-4">
                    <h3>Digital Futures</h3>
                    <p>Login in to your account</p>

                    <form onSubmit={login} action="">
                        <div className="">
                            <div className="form-inputs">
                                <label htmlFor="Email" className="col-4">Email</label>
                                <input type="email" name="email" className="col-6" onChange={handleChange} />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="Username" className="col-4">Username</label>
                                <input type="text" name="username" className="col-6" onChange={handleChange} />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="Password" className="col-4">Password</label>
                                <input type="password" name="password" className="col-6" onChange={handleChange} />
                            </div>
                        </div>
                        <input type="submit" value="Login" className="btn btn-primary col-5 draft-btn" />
                    </form>
                </div>
                {/* <div className="col-4 login-div">
                    <img src={dfxbackground} alt="" className="background-image borderClass" />
                </div> */}
            </div>
        </div >
    )
}

Login.propTypes = {

}

export default Login
