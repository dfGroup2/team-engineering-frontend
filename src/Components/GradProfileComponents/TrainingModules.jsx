import React from 'react'
import PropTypes from 'prop-types'
import '../../css/TrainingSection.css';

const TrainingModules = ({ trainingModules }) => {

    const { fundamentals, software_design } = trainingModules;

    const displayModules = () => {


        return (<></>);
    }

    return (
        <div className="row card borderClass">
            <div className="col-6 training-div">
                <p>Fundamentals, Javascript Programming: {fundamentals.javascript_programming}</p>
                <p>Software Design, Bank Challenge: {software_design.bank_challenge}</p>
                <p>Software Design, News Summary Challenge: {software_design.news_summary_challenge}</p>
            </div>
        </div>
    )
}

TrainingModules.propTypes = {

}

export default TrainingModules
