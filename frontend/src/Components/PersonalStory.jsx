import React from 'react'
import PropTypes from 'prop-types'
import "../css/PersonalStory.css"

const PersonalStory = props => {
    return (
        <div className="ps-section">
            <p>Personal story summary:</p>
            <div className="card borderClass">
            <p>Degree in XXX from YYY</p>
            <p>4 school qualifications</p>
            <p>5 work experiences</p>
            <p>3 personal achievements</p>
            </div>
        </div>
    )
}

PersonalStory.propTypes = {

}

export default PersonalStory
