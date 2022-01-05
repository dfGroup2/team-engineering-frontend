import React from 'react'
import PropTypes from 'prop-types'
import '../../css/TrainingSection.css';

const TrainingModules = ({ trainingModules }) => {

    const { fundamentals } = trainingModules;

    return (
        <div className="row card borderClass">
            <div className="col-4 training-div">
                <p>{Object.keys(fundamentals)[0]}: {Object.values(fundamentals)[0]}</p>
                <p>Module 1, Challenge B: PASSED</p>
                <p>Module 2, Challenge C: TODO</p>
            </div>
        </div>
    )
}

TrainingModules.propTypes = {

}

export default TrainingModules
