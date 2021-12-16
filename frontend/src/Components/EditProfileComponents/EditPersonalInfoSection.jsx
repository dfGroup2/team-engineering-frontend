import React from 'react'
import PropTypes from 'prop-types'

const EditPersonalInfoSection = props => {
    return (
        <div>
            <h3>Personal Information</h3>
            <div className="row">
                <div className="col-6">
                    <form action="">
                        <div>
                            <label htmlFor="Name">Name</label>
                            <input type="text" name="Name" />
                        </div>
                        <div>
                            <label htmlFor="p-email">Personal Email</label>
                            <input type="email" name="p-email" />
                        </div>
                        <div>
                            <label htmlFor="df-email">Digital Futures Email</label>
                            <input type="email" name="df-email" />
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
