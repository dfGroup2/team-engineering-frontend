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
                    <p className="borderClass">{personalInfo.badges[0]}<br />
                        xxxxx xxx x</p>
                    <p className=" borderClass">Badge A <br />
                        xxxxx xxx x</p>
                </div>
                <div className="col-2">
                    <p className=" borderClass">Badge A <br />
                        xxxxx xxx x</p>
                    <p className="borderClass">Badge A <br />
                        xxxxx xxx x</p>
                </div>
                <div className="col-1">
                    <p>Scores:</p>
                </div>
                <div className="col-5 borderClass overflow-auto " style={{ height: "70px" }}
                >
                    <p>Aptitude:93%</p>
                    <p>Java:87</p>
                </div>
            </div>
        </div>
    )
}

InfoSection.propTypes = {

}

export default InfoSection
