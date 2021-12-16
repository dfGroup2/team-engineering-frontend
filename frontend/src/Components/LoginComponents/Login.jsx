import React from 'react'
import PropTypes from 'prop-types'
import '../../css/Login.css';
import dfxbackground from '../../images/dfx_background.png';

const Login = props => {
    return (
        <div className="container card">
            <div className="row">
                <div className="col-4">
                    <h3>Digital Futures</h3>
                    <p>Login in to your account</p>

                    <form action="">
                        <div className="">
                            <div className="form-inputs">
                                <label htmlFor="Email" className="col-4">Email</label>
                                <input type="email" name="Email" className="col-6" />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="Username" className="col-4">Username</label>
                                <input type="text" name="Username" className="col-6" />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="Password" className="col-4">Password</label>
                                <input type="password" name="password" className="col-6" />
                            </div>
                        </div>
                        <input type="submit" value="Login" className="btn btn-primary col-5 draft-btn" />
                    </form>
                </div>
                <div className="col-4 login-div">
                    <img src={dfxbackground} alt="" className="background-image borderClass" />
                </div>
            </div>
        </div >
    )
}

Login.propTypes = {

}

export default Login
