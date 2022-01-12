import React from 'react'
import PropTypes from 'prop-types'
import '../../css/TrainingSection.css';
import Badge from 'react-bootstrap/Badge'

const TrainingModules = ({ trainingModules }) => {
    const createFormattedModuleTitle = nestedObject => {
        const rows = [];
        for (const [key, value] of Object.entries(nestedObject)) {
            const currentModuleTitle = <div class="col-6 border-bottom">{key}</div>;
            const currentModuleItems = createFormattedRow(formatTrainingModuleData(value));
            rows.push(
                <>
                    {currentModuleTitle}
                    <div class="col-6 ">
                        <ul class="list-group">
                            {currentModuleItems}
                        </ul>
                    </div>
                </>
            )
        }
        return rows;
    }

    const createFormattedRow = (array) => {
        const currentModuleItems = array.map(currentArray => {
            return <li class="list-group-item align-items-center text-start">
                {currentArray[0]}
                &nbsp;
                &nbsp;
                &nbsp;
                <Badge pill bg="primary" className="text-end">
                    {currentArray[1]}
                </Badge>{' '}
            </li>
        })
        return currentModuleItems;
    }

    const formatTrainingModuleData = nestedModuleItemObject => {
        //converts nested object to an array of its key value pairs
        const nestedModuleItemObjectArray = Object.entries(nestedModuleItemObject);
        return nestedModuleItemObjectArray;
    }

    return (
        <div className="row card borderClass shadow-lg p-3 mb-5 bg-white rounded">
            {/* <div className="col-8 training-div"> */}
            <h3>Training Modules</h3>
            <div class="container ">
                <div class="row padding">
                    {createFormattedModuleTitle(trainingModules)}
                </div>
            </div>
        </div >
    )
}

TrainingModules.propTypes = {

}

export default TrainingModules;
