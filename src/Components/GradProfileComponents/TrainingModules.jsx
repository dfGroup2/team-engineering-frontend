import React from 'react'
import PropTypes from 'prop-types'
import '../../css/TrainingSection.css';

const TrainingModules = props => {
    return (
        <div className="row card borderClass">
            <div className="col-4 training-div">
                <p>Module 1, Challenge A: PASSED</p>
                <p>Module 1, Challenge B: PASSED</p>
                <p>Module 2, Challenge C: TODO</p>
            </div>
        </div>
    )
}

TrainingModules.propTypes = {

}

export default TrainingModules
