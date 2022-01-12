import React from 'react'
import PropTypes from 'prop-types'
import '../../css/TrainingSection.css';
import Badge from 'react-bootstrap/Badge'

const TrainingModules = ({ trainingModules }) => {

    //[[key, nestedKey, nestedValue], [key, nestedKey, nestedValue]]
    const createFormattedModuleTitle = nestedObject => {
        const rows = [];
        for (const [key, value] of Object.entries(nestedObject)) {
            const currentModuleTitle = <div class="col">{key}</div>;
            const currentModuleItems = createFormattedRow(formatTrainingModuleData(value));
            rows.push(<>
                {currentModuleTitle}
                <div class="col-8 ">
                    <ul class="list-group">
                        {currentModuleItems}
                    </ul>
                </div>
            </>)
        }
        return rows;
    }

    const createFormattedRow = (array) => {
        console.log(array)
        const currentModuleItems = array.map(currentArray => {
            return <li class="list-group-item align-items-center">
                {currentArray[0]}
                &nbsp;
                &nbsp;
                &nbsp;
                <Badge pill bg="primary">
                    {currentArray[1]}
                </Badge>{' '}
            </li>
        })
        return currentModuleItems;
    }
    // const createTrainingItem = moduleArray => {
    //     const listItemArrayToDisplay = moduleArray.map((currentModuleItem, index) => {
    //         const title = currentModuleItem[0];
    //         const subTitle = currentModuleItem[1];
    //         const subTitleScore = currentModuleItem[2];
    //         return (<li class="list-group" key={index}>
    //             {title}: {subTitle}: {subTitleScore}
    //         </li >)
    //     })
    //     return listItemArrayToDisplay;
    // }


    //{
    //     key: [[nestedKey, nestedValue], [nestedKey, nestedValue]],
    //         key: [[nestedKey, nestedValue], [nestedKey, nestedValue]], key: [[nestedKey, nestedValue], [nestedKey, nestedValue]]
    // }
    const formatTrainingModuleData = nestedModuleItemObject => {
        //converts nested object to an array of its key value pairs
        const formattedModuleArray = [];
        const nestedModuleItemObjectArray = Object.entries(nestedModuleItemObject);
        console.log(nestedModuleItemObjectArray)
        return nestedModuleItemObjectArray;

        // const nestedObjectKeys = Object.keys(nestedModuleItemObject);
        // for (let i = 0; i < nestedObjectKeys.length; i++) {
        //     console.log(Object.entries(nestedModuleItemObject[nestedObjectKeys[i]]))

        // }
        // for (let i = 0; i < nestedObjectKeys.length; i++) {
        //     //key denotes the different training modules
        //     //value denotes an object assigned to key
        //     nestedModuleItemObject[nestedObjectKeys[i]] = [Object.entries(nestedModuleItemObject[nestedObjectKeys[i]])];

        //     // for (const [nestedKey, nestedValue] of Object.entries(value)) {
        //     //     //nestedKey denotes module items
        //     //     //nestedValue denotes module item scores or grades
        //     //     //formattedModuleArray.push([key, nestedKey, nestedValue])
        //     //     nestedObject[key].push([nestedKey, nestedValue])
        //     // }
        //     console.log(nestedObject[nestedObjectKeys[i]])
        // }
        // //return formattedModuleArray;

        // return nestedModuleItemObject
    }

    return (
        <div className="row card borderClass shadow-lg p-3 mb-5 bg-white rounded">
            {/* <div className="col-8 training-div"> */}
            <h3>Training Modules</h3>
            <div class="container ">
                <div class="row padding">
                    {createFormattedModuleTitle(trainingModules)}
                    <div class="col ">
                        software design
                    </div>
                    <div class="col-8 ">
                        <ul class="list-group">
                            <li class="list-group-item align-items-center">
                                Morbi leo risus
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <Badge pill bg="primary">
                                    Pass
                                </Badge>{' '}
                            </li>
                            <li class="list-group-item align-items-center">
                                Morbi leo risus
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <Badge pill bg="primary">
                                    Pass
                                </Badge>{' '}
                            </li>
                            <li class="list-group-item align-items-center">
                                Morbi leo risus
                                &nbsp;
                                &nbsp;
                                &nbsp;
                                <Badge pill bg="primary">
                                    Pass
                                </Badge>{' '}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <ul >
                {/* {createTrainingItem(formatTrainingModuleData(trainingModules))} */}
            </ul>
            {/* </div> */}
        </div >
    )
}

TrainingModules.propTypes = {

}

export default TrainingModules;
