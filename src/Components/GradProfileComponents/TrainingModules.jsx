import React from 'react'
import PropTypes from 'prop-types'
import '../../css/TrainingSection.css';

const TrainingModules = ({ trainingModules }) => {

    const createTrainingItem = moduleArray => {
        const listItemArrayToDisplay = moduleArray.map((currentModuleItem, index) => {
            const title = currentModuleItem[0];
            const subTitle = currentModuleItem[1];
            const subTitleScore = currentModuleItem[2];
            return (<li key={index}>
                {title}: {subTitle}: {subTitleScore}
            </li >)
        })
        return listItemArrayToDisplay;
    }

    const formatTrainingModuleData = nestedObject => {
        const formattedModuleArray = [];
        for (const [key, value] of Object.entries(nestedObject)) {
            //key denotes the different training modules
            //value denotes an object assigned to key
            for (const [nestedKey, nestedValue] of Object.entries(value)) {
                //nestedKey denotes module items
                //nestedValue denotes module item scores or grades
                formattedModuleArray.push([key, nestedKey, nestedValue])
            }
        }
        return formattedModuleArray;
    }

    return (
        <div className="row card borderClass">
            <div className="col-8 training-div">
                <h3>Training Modules</h3>
                <ul>
                    {createTrainingItem(formatTrainingModuleData(trainingModules))}
                </ul>
            </div>
        </div>
    )
}

TrainingModules.propTypes = {

}

export default TrainingModules
