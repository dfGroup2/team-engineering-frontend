import React from 'react'
import PropTypes from 'prop-types'
import { testGraduateUser } from '../../tests/testData/sampleGraduateUser';
const {personalInfo} = testGraduateUser

const InfoSection = props => {
    return (
        <div className="container card borderClass">
            <h3 className="col-3">Your information </h3>
            <div className="row">
                <div className="col-1">
                    <p>Badges:</p>
                </div>
                <div className="col-2">
                    <p className="borderClass">{personalInfo.badges[0]}
                        </p>
                    <p className=" borderClass">{personalInfo.badges[1]}
                        </p>
                </div>
                <div className="col-2">
                    <p className=" borderClass">{personalInfo.badges[2]}
                        </p>
                    <p className="borderClass">{personalInfo.badges[3]}
                        </p>
                </div>
                <div className="col-1">
                    <p>Scores:</p>
                </div>
                <div className="col-5 borderClass overflow-auto " style={{ height: "70px" }}
                >
                    <p>Aptitude:<span>{personalInfo.scores[0]}</span>%</p>
                    <p>Java:<span>{personalInfo.scores[1]}</span>%</p>
                </div>
            </div>
        </div>
    )
}

InfoSection.propTypes = {

}

export default InfoSection
