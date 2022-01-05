import React from 'react'
import PropTypes from 'prop-types'
import '../../css/TrainingSection.css';

const TrainingModules = ({ trainingModules }) => {

    const { fundamentals, softwareDesign } = trainingModules;

    const displayModules = () => {


        return (<></>);
    }

    return (
        <div className="row card borderClass">
            <div className="col-6 training-div">
                <p>Fundamentals, Javascript Programming: {fundamentals.javascriptProgramming}</p>
                <p>Software Design, Bank Challenge: {softwareDesign.bankChallenge}</p>
                <p>Software Design, News Summary Challenge: {softwareDesign.newsSummaryChallenge}</p>
                <p>Software Design, Rock Paper Scissors Challenge: {softwareDesign.rockPaperScissorsChallenge}</p>
                <p>Software Design, Chitter Challenge: {softwareDesign.chitterChallenge}</p>
            </div>
        </div>
    )
}

TrainingModules.propTypes = {

}

export default TrainingModules
