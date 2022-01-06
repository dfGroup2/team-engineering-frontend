import React from 'react'
import PropTypes from 'prop-types'
import { testGraduateUser } from '../../tests/testData/sampleGraduateUser';

const InfoSection = ({ infoData }) => {
    const { badges, scores } = infoData
    return (
        <div className="container card borderClass">
            <h3 className="col-3">Your information </h3>
            <div className="row">
                <div className="col-1">
                    <p>Badges:</p>
                </div>
                <div className="col-2">
                    <p className="borderClass">{badges[0]}
                    </p>
                    <p className=" borderClass">{badges[1]}
                    </p>
                </div>
                <div className="col-2">
                    <p className=" borderClass">{badges[2]}
                    </p>
                    <p className="borderClass">{badges[3]}
                    </p>
                </div>
                <div className="col-1">
                    <p>Scores:</p>
                </div>
                <div className="col-5 borderClass overflow-auto " style={{ height: "70px" }}
                >
                    <p>Aptitude:<span>{scores[0]}</span>%</p>
                    <p>Java:<span>{scores[1]}</span>%</p>
                    <p>JavaScript:<span>{scores[2]}</span>%</p>
                    <p>CSS:<span>{scores[3]}</span>%</p>
                </div>
            </div>
        </div>
    )
}

InfoSection.propTypes = {

}

export default InfoSection
