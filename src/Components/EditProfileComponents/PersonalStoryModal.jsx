import { useState } from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const PersonalStoryModal = ({ show, setShowModal, inputFieldHeaders }) => {
    const [university, setUniversity] = useState('');
    const [degreeSubject, setDegreeSubject] = useState('');
    const [degreeLevel, setDegreeLevel] = useState('');
    const [grade, setGrade] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [description, setDescription] = useState('');
    const handleUniversityChange = changeEvent => {
        setUniversity(changeEvent.target.value)
    }
    const handleDegreeSubjectChange = changeEvent => {
        setDegreeSubject(changeEvent.target.value)
    }
    const handleDegreeLevelChange = changeEvent => {
        setDegreeLevel(changeEvent.target.value)
    }
    const handleGradeChange = changeEvent => {
        setGrade(changeEvent.target.value)
    }
    const handleFromChange = changeEvent => {
        setFrom(changeEvent.target.value)
    }
    const handleToChange = changeEvent => {
        setTo(changeEvent.target.value)
    }
    const handleDescriptionChange = changeEvent => {
        setDescription(changeEvent.target.value)
    }
    // const handleInputChange = changeEvent => {
    //     const inputFieldName = changeEvent.target.name
    //     props.inputFieldHeaders
    // }

    // const createFormItem = headerArray => {
    //     headerArray.map(header => {
    //         <div className="form-inputs">
    //             <label htmlFor={header} className="col-6">{header}</label>
    //             <input type="text" value={ } name={header} className="col-6" placeholder={header} onChange={ } />
    //         </div>
    //     })

    // }
    const handleClose = () => setShowModal(false);

    return (

        <Modal show={show} onHide={handleClose}>
            <Modal.Header >
                <Modal.Title>degree</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container card borderClass">
                    <div className="row">
                        <div className="col-4">
                            <form action="">
                                <div className="">
                                    <div className="form-inputs">
                                        <label htmlFor="Name" className="col-6">University</label>
                                        <input type="text" value={university} name="university" className="col-6" onChange={handleUniversityChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="p-email" className="col-6">DegreeSubject</label>
                                        <input type="email" value={degreeSubject} name="degreeSubject" className="col-6" onChange={handleDegreeSubjectChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="df-email" className="col-6">Degree Level</label>
                                        <input type="email" value={degreeLevel} name="degreeLevel" className="col-6" p onChange={handleDegreeLevelChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="GitHub" className="col-6">Grade</label>
                                        <input type="text" value={grade} name="grade" className="col-6" onChange={handleGradeChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="linkedIn" className="col-6">From</label>
                                        <input type="text" value={from} name="from" className="col-6" onChange={handleFromChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="phone" className="col-6">To</label>
                                        <input type="number" value={to} name="to" className="col-6" onChange={handleToChange} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-4 align-dropdowns">
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        Weight
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Male</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Female</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Non-binary</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">Transgender</Dropdown.Item>
                                        <Dropdown.Item href="#/action-5">Prefer not to say</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div><br />
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        Priority
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">United Kingdom of Great Britain and Northern Ireland</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">United States of America</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">France</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">Germany</Dropdown.Item>
                                        <Dropdown.Item href="#/action-5">Italy</Dropdown.Item>
                                        <Dropdown.Item href="#/action-6">Prefer not to say</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div> <br />
                            <div className="form-inputs">
                                <label htmlFor="phone" className="col-6">Description</label>
                                <input type="text" value={description} name="description" className="col-6" onChange={handleDescriptionChange} />
                            </div>
                        </div>

                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

PersonalStoryModal.propTypes = {

}

export default PersonalStoryModal
