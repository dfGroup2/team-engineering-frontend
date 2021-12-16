import React from 'react'
import PropTypes from 'prop-types'

const Login = props => {
    return (
        <div className="container card borderClass">
            <h3>Digital Futures</h3>
            <p>Login in to your account</p>
            
            <form action="">
                        <div className="">
                            <div className="form-inputs">
                                <label htmlFor="Email" className="col-4">Email</label>
                                <input type="email" name="Email" className="col-6" />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="Username" className="col-6">Username</label>
                                <input type="text" name="Username" className="col-6" />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="Password" className="col-6">Password</label>
                                <input type="password" name="password" className="col-6" />
                            </div>
                </div>
                <input type="submit" value="Login" className="btn btn-primary col-5 draft-btn" />
                    </form>
            
            
        </div>
    )
}

Login.propTypes = {

}

export default Login
