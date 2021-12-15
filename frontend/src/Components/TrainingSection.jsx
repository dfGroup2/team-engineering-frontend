import React from 'react'
import PropTypes from 'prop-types'
import TrainingModules from './TrainingModules'

const TrainingSection = props => {
    return (
        <div className="container card borderClass">
            <h3 className="col-2">Your training</h3>
            <div className="row">
                <div className="col-2">
                    <p>Cohort: xxxxxx</p>
                    <p>Learning Path: xxxxxx</p>
                    <p>Trainer: xxxxxx</p>
                    <p>Training finish date: xxxxxx</p>
                </div>
                <p className="col-1"></p>
                <div className="col-3 col-8 card borderClass">
                    <TrainingModules />
                </div>
            </div>
        </div>
    )
}

TrainingSection.propTypes = {

}

export default TrainingSection
