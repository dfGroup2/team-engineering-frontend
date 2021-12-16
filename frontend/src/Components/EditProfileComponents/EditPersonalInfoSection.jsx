import React from 'react'
import PropTypes from 'prop-types'

const EditPersonalInfoSection = props => {
    return (
        <div className="container card borderClass">
            <h3 className="col-3">Personal Information</h3>
            <div className="row">
                <div className="col-6">
                    <form action="">
                        <div className="col-6">
                            <div>
                                <label htmlFor="Name" className="col-6">Name</label>
                                <input type="text" name="Name" className="col-6" />
                            </div>
                            <div>
                                <label htmlFor="p-email" className="col-6">Personal Email</label>
                                <input type="email" name="p-email" className="col-6" />
                            </div>
                            <div>
                                <label htmlFor="df-email" className="col-6">Digital Futures Email</label>
                                <input type="email" name="df-email" className="col-6" />
                            </div>
                            <div>
                                <label htmlFor="GitHub" className="col-6">GitHub</label>
                                <input type="text" name="GitHub" className="col-6" />
                            </div>
                            <div>
                                <label htmlFor="linkedIn" className="col-6">LinkedIn</label>
                                <input type="text" name="linkedIn" className="col-6" />
                            </div>
                            <div>
                                <label htmlFor="phone" className="col-6">Phone</label>
                                <input type="number" name="phone" className="col-6" />
                            </div>
                        </div>
                        <div className="col-6">

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

EditPersonalInfoSection.propTypes = {

}

export default EditPersonalInfoSection
