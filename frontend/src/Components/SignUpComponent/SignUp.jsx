import React from 'react'
import PropTypes from 'prop-types'
import '../../css/Login.css';
import dfxbackground from '../../images/dfx_background.png';

const SignUp = props => {
    return (
        <div className="container card">
            <div className="row">
                <div className="background-image" style={{ backgroundImage: `url(${dfxbackground})` }}
                >
                </div>
                <div className="not-background-image col-4">
                    <h3>Digital Futures</h3>
                    <p>SignUp for an account</p>

                    <form action="">
                        <div className="">
                            <div className="form-inputs">
                                <label htmlFor="Email" className="col-4">Email</label>
                                <input type="email" name="Email" className="col-6" />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="FirstName" className="col-4">First name</label>
                                <input type="text" name="FirstName" className="col-6" />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="LastName" className="col-4">Last name</label>
                                <input type="text" name="LastName" className="col-6" />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="Company" className="col-4"></label>
                                <input type="text" name="Company" className="col-6" />
                            </div>
                        </div>
                        <input type="submit" value="SignUp" className="btn btn-primary col-5 draft-btn" />
                    </form>
                </div>
                {/* <div className="col-4 login-div">
                    <img src={dfxbackground} alt="" className="background-image borderClass" />
                </div> */}
            </div>
        </div >
    )
}

SignUp.propTypes = {

}

export default SignUp
