import React from 'react'
import PropTypes from 'prop-types'
import '../../css/TrainingSection.css';

const TrainingModules = ({ trainingModules }) => {

    const { fundamentals, softwareDesign, softwareDevelopment1, softwareDevelopment2, teamEngineering, professionalSkills } = trainingModules;

    return (
        <div className="row card borderClass">
            <div className="col-8 training-div">
                <p>Fundamentals, Javascript Programming: {fundamentals.javascriptProgramming}</p>
                <p>Software Design, Bank Challenge: {softwareDesign.bankChallenge}</p>
                <p>Software Design, News Summary Challenge: {softwareDesign.newsSummaryChallenge}</p>
                <p>Software Design, Rock Paper Scissors Challenge: {softwareDesign.rockPaperScissorsChallenge}</p>
                <p>Software Design, Chitter Challenge: {softwareDesign.chitterChallenge}</p>
                <p>Software Design, Test Driven Development: {softwareDesign.testDrivenDevelopment}</p>
                <p>Software Development 1, Third Party Integration: {softwareDevelopment1.thirdPartyIntegration}</p>
                <p>Software Development 2, Business Services: {softwareDevelopment2.businessServices}</p>
                <p>Software Development 2, Full Stack Application: {softwareDevelopment2.fullStackApplication}</p>
                <p>Team Engineering, Java Challenge: {teamEngineering.javaChallenge}</p>
                <p>Team Engineering, Agile Team Collaboration: {teamEngineering.agileTeamCollaboration}</p>
                <p>Professional Skills, Interview Challenges: {professionalSkills.interviewChallenges}</p>
            </div>
        </div>
    )
}

TrainingModules.propTypes = {

}

export default TrainingModules
