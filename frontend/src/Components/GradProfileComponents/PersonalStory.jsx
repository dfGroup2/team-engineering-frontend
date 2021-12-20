import React from 'react'
import PropTypes from 'prop-types'
import "../../css/PersonalStory.css"

const PersonalStory = ({ personalStoryData }) => {
    const { degree, schoolQualifications, certificatesAndAwards, portfolio, workExperience } = personalStoryData;

    return (
        <div className="ps-section">
            <p>Personal story summary:</p>
            <div className="card borderClass story-div">
                <p>Degree in {degree.subject} from {degree.university}</p>
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
