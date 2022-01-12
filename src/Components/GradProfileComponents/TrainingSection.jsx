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
        <div className="container card borderClass editCard">
            <h3 className="col-2 fw-bold">Your training</h3>
            <div className="row">
                <div className="col-2">
                    <p className="titles">Cohort:</p> <p>{cohort}</p>
                    <p className="titles">Learning Path:</p> <p>{learningPath}</p>
                    <p className="titles">Trainer:</p> <p> {trainer}</p>
                    <p className="titles">Training finish date:</p><p> {formatDate(finishedDate)}</p>
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
