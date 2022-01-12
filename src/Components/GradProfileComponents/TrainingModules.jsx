import React from 'react'
import PropTypes from 'prop-types'
import '../../css/TrainingSection.css';
import Badge from 'react-bootstrap/Badge'

const TrainingModules = ({ trainingModules }) => {

    //[[key, nestedKey, nestedValue], [key, nestedKey, nestedValue]]
    const createFormattedRow = array => {
        for (let i = 0; i < array.length; i++) {

            const key = array[i][0];
            const nestedKey = array[i][1];
            const nestedValue = array[i][2];
            const currentModuleTitle = <div class="col">{key}</div>;
            const currentModuleItem = <li class="list-group-item align-items-center">
                {nestedKey}
                &nbsp;
                &nbsp;
                &nbsp;
                <Badge pill bg="primary">
                    {nestedValue}
                </Badge>{' '}
            </li>;
            array.filter(currentArrayItem => {
                currentArrayItem[0] === key;
            }).map(currentArray => {
                return <li class="list-group-item align-items-center">
                    {currentArray[1]}
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Badge pill bg="primary">
                        {currentArray[2]}
                    </Badge>{' '}
                </li>
            })

            badgeColumnDivArrayPopulated.push(<div className="col-2">
                <p className="borderClass">
                    {key}
                </p>
                <p className="borderClass">
                    {badge2}
                </p>
            </div>)
        }
        const createTrainingItem = moduleArray => {
            const listItemArrayToDisplay = moduleArray.map((currentModuleItem, index) => {
                const title = currentModuleItem[0];
                const subTitle = currentModuleItem[1];
                const subTitleScore = currentModuleItem[2];
                return (<li class="list-group" key={index}>
                    {title}: {subTitle}: {subTitleScore}
                </li >)
            })
            return listItemArrayToDisplay;
        }


        //{ 
        //     key: [[nestedKey, nestedValue], [nestedKey, nestedValue]],
        //         key: [[nestedKey, nestedValue], [nestedKey, nestedValue]], key: [[nestedKey, nestedValue], [nestedKey, nestedValue]]
        // }
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
            <div className="row card borderClass shadow-lg p-3 mb-5 bg-white rounded">
                {/* <div className="col-8 training-div"> */}
                <h3>Training Modules</h3>
                <div class="container ">
                    <div class="row padding">
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
                    {createTrainingItem(formatTrainingModuleData(trainingModules))}
                </ul>
                {/* </div> */}
            </div >
        )
    }

    TrainingModules.propTypes = {

    }

    export default TrainingModules
