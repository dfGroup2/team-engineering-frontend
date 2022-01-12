import React from 'react'
import PropTypes from 'prop-types'
import "../../css/PersonalStory.css"

const PersonalStory = ({ personalStoryData }) => {
    const { degree, schoolQualifications, certificatesAndAwards, portfolio, workExperience } = personalStoryData;
    const numOfQuals = schoolQualifications.length;
    const numOfWorkExperience = workExperience.length;
    const numOfAchievements = certificatesAndAwards.length

    const formatStory = (number, string) => {
        return number === 1 ? string : string += "s";
    }

    return (
        <div className="ps-section">
            <p className="fw-bold">Personal story summary:</p>
            <div className="card borderClass story-div">
                <p>Degree in {degree[0].subject} from {degree[0].university}</p>
                <p>{numOfQuals} {formatStory(numOfQuals, "school qualification")}</p>
                <p>{numOfWorkExperience} {formatStory(numOfWorkExperience, "work experience")}</p>
                <p>{numOfAchievements} {formatStory(numOfAchievements, "personal achievement")}</p>
            </div>
        </div>
    )
}

PersonalStory.propTypes = {

}

export default PersonalStory
