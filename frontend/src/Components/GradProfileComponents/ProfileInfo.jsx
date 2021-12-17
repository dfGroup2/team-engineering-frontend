import React from 'react'
import PropTypes from 'prop-types'

const ProfileInfo = ({ profileInfo }) => {
    const { firstName, lastName, personalEmail, DFEmail, github, linkedIn, phoneNumber } = profileInfo;

    return (
        <div>
            <p>Name: {firstName} {lastName}</p>
            <p>Personal email: {personalEmail}</p>
            <p>Digital Futures email: {DFEmail}</p>
            <p>Github: {github}</p>
            <p>LinkedIn: {linkedIn}</p>
            <p>Phone: {phoneNumber}</p>
        </div>
    )
}

ProfileInfo.propTypes = {

}

export default ProfileInfo
