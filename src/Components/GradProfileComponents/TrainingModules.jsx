import React from 'react'
import PropTypes from 'prop-types'
import '../../css/TrainingSection.css';
import Badge from 'react-bootstrap/Badge'

const TrainingModules = ({ trainingModules, capitaliseFirstLetter }) => {
    const createFormattedModuleTitle = nestedObject => {
        const rows = [];
        for (const [moduleTitle, moduleItems] of Object.entries(nestedObject)) {
            const currentModuleTitle = <div class="col-6 border-bottom">{capitaliseFirstLetter(moduleTitle)}</div>;
            const currentModuleItems = createFormattedRow(formatTrainingModuleItems(moduleItems));
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
                {capitaliseFirstLetter(currentArray[0])}
                &nbsp;
                &nbsp;
                &nbsp;
                <div className="badge-div">
                    <Badge pill bg="primary" className="text-end">
                        {currentArray[1]}
                    </Badge>{' '}
                </div>
            </li>
        })
        return currentModuleItems;
    }

    const formatTrainingModuleItems = nestedModuleItemObject => {
        //converts nested object to an array of its key value pairs
        const nestedModuleItemObjectArray = Object.entries(nestedModuleItemObject);
        return nestedModuleItemObjectArray;
    }

    return (
        <div className="row card borderClass shadow-lg p-3 mb-5 bg-white rounded">
            {/* <div className="col-8 training-div"> */}
            <h3>Training Modules</h3>
            &nbsp;
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
