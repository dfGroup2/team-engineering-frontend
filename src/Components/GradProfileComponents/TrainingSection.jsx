import React from 'react'
import PropTypes from 'prop-types'
import TrainingModules from './TrainingModules'

const TrainingSection = ({ graduateTrainingData }) => {

    const { cohort, learningPath, trainer, finishedDate, courseModules } = graduateTrainingData;

    return (
        <div className="container card borderClass">
            <h3 className="col-2">Your training</h3>
            <div className="row">
                <div className="col-2">
                    <p>Cohort: {cohort}</p>
                    <p>Learning Path: {learningPath}</p>
                    <p>Trainer: {trainer}</p>
                    <p>Training finish date: {finishedDate}</p>
                </div>
                <p className="col-1"></p>
                <div className="col-8">
                    <TrainingModules trainingModules={courseModules} />
                </div>
            </div>
        </div>
    )
}

TrainingSection.propTypes = {

}

export default TrainingSection
