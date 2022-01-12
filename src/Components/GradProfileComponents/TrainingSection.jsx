import React from 'react'
import PropTypes from 'prop-types'
import TrainingModules from './TrainingModules'

const TrainingSection = ({ graduateUserData, capitaliseFirstLetter }) => {

    const { learningPath, cohort, trainer, finishedDate, courseModules } = graduateUserData.graduateTraining;

    const formatDate = dateISOstring => {
        const date = new Date(dateISOstring);
        return date.toLocaleDateString();
    }

    return (
        <div className="container card borderClass">
            <h3 className="col-2">Your training</h3>
            <div className="row">
                <div className="col-2">
                    <p>Cohort: {cohort}</p>
                    <p>Learning Path: {learningPath}</p>
                    <p>Trainer: {trainer}</p>
                    <p>Training finish date: {formatDate(finishedDate)}</p>
                </div>
                <p className="col-1"></p>
                <div className="col-8">
                    <TrainingModules trainingModules={courseModules} capitaliseFirstLetter={capitaliseFirstLetter} />
                </div>
            </div>
        </div>
    )
}

TrainingSection.propTypes = {

}

export default TrainingSection
