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
                    </form>
                </div>
            </div>
        </div>
    )
}

EditPersonalInfoSection.propTypes = {

}

export default EditPersonalInfoSection
