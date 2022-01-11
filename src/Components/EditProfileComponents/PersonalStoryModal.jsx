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
    const [school, setSchool] = useState('');
    const [examType, setExamType] = useState('');
    const [subject, setSubject] = useState('');
    const [year, setYear] = useState('');
    const [type, setType] = useState('');
    const [employer, setEmployer] = useState('');
    const [position, setPosition] = useState('');
    const [issuer, setIssuer] = useState('');
    const [award, setAward] = useState('');
    const [title, setTitle] = useState('');
    const [url, setURL] = useState('');
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
    const handleSchoolChange = changeEvent => {
        setSchool(changeEvent.target.value)
    }
    const handleExamTypeChange = changeEvent => {
        setExamType(changeEvent.target.value)
    }
    const handleSubjectChange = changeEvent => {
        setSubject(changeEvent.target.value)
    }
     const handleYearChange = changeEvent => {
        setYear(changeEvent.target.value)
    }
     const handleTypeChange = changeEvent => {
        setType(changeEvent.target.value)
    }
     const handleEmployerChange = changeEvent => {
        setEmployer(changeEvent.target.value)
    }
     const handlePositionChange = changeEvent => {
        setPosition(changeEvent.target.value)
    }
     const handleIssuerChange = changeEvent => {
        setIssuer(changeEvent.target.value)
    }
     const handleAwardChange = changeEvent => {
        setAward(changeEvent.target.value)
    }
     const handleTitleChange = changeEvent => {
        setTitle(changeEvent.target.value)
    }
     const handleURLChange = changeEvent => {
        setURL(changeEvent.target.value)
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

    const handleSubmit = () => {

    }
    const renderDegrees = () => {
        return (<form action="">
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
                                    <div className="form-inputs">
                                        <label htmlFor="phone" className="col-6">Description</label>
                                        <input type="text" value={description} name="description" className="col-6" onChange={handleDescriptionChange} />
                                     </div>
                                </div>
                            </form>)
    }

    const renderSchoolQuals = () => {
        return (<form action="">
                                <div className="">
                                    <div className="form-inputs">
                                        <label htmlFor="Name" className="col-6">School</label>
                                        <input type="text" value={school} name="school" className="col-6" onChange={handleSchoolChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="p-email" className="col-6">Exam Type</label>
                                        <input type="text" value={examType} name="examType" className="col-6" onChange={handleExamTypeChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="df-email" className="col-6">Subject</label>
                                        <input type="text" value={subject} name="subject" className="col-6" p onChange={handleSubjectChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="GitHub" className="col-6">Grade</label>
                                        <input type="text" value={grade} name="grade" className="col-6" onChange={handleGradeChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="phone" className="col-6">Year</label>
                                        <input type="date" value={year} name="year" className="col-6" onChange={handleYearChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="phone" className="col-6">Description</label>
                                        <input type="text" value={description} name="description" className="col-6" onChange={handleDescriptionChange} />
                                     </div>
                                </div>
                            </form>)
    }

    const renderWorkExperience = () => {
        return(<form action="">
                                <div className="">
                                    <div className="form-inputs">
                                        <label htmlFor="Name" className="col-6">Type</label>
                                        <input type="text" value={type} name="type" className="col-6" onChange={handleTypeChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="p-email" className="col-6">Employer or other</label>
                                        <input type="email" value={employer} name="employer" className="col-6" onChange={handleEmployerChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="df-email" className="col-6">Position</label>
                                        <input type="email" value={position} name="position" className="col-6" p onChange={handlePositionChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="linkedIn" className="col-6">From</label>
                                        <input type="text" value={from} name="from" className="col-6" onChange={handleFromChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="phone" className="col-6">To</label>
                                        <input type="number" value={to} name="to" className="col-6" onChange={handleToChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="phone" className="col-6">Description</label>
                                        <input type="text" value={description} name="description" className="col-6" onChange={handleDescriptionChange} />
                                     </div>
                                </div>
                            </form>)
    }

    const renderCertificates = () => {
        return(<form action="">
                                <div className="">
                                    <div className="form-inputs">
                                        <label htmlFor="Name" className="col-6">Type</label>
                                        <input type="text" value={type} name="type" className="col-6" onChange={handleTypeChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="p-email" className="col-6">Issuer</label>
                                        <input type="email" value={issuer} name="issuer" className="col-6" onChange={handleIssuerChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="df-email" className="col-6">Award</label>
                                        <input type="email" value={award} name="award" className="col-6" p onChange={handleAwardChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="GitHub" className="col-6">Grade</label>
                                        <input type="text" value={grade} name="grade" className="col-6" onChange={handleGradeChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="linkedIn" className="col-6">Year</label>
                                        <input type="date" value={year} name="year" className="col-6" onChange={handleYearChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="phone" className="col-6">Description</label>
                                        <input type="text" value={description} name="description" className="col-6" onChange={handleDescriptionChange} />
                                     </div>
                                </div>
                            </form>)
    }

    const renderPortfolio = () => {
        return(<form action="">
                                <div className="">
                                    <div className="form-inputs">
                                        <label htmlFor="Name" className="col-6">Title</label>
                                        <input type="text" value={title} name="title" className="col-6" onChange={handleTitleChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="p-email" className="col-6">URL</label>
                                        <input type="email" value={url} name="url" className="col-6" onChange={handleURLChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="df-email" className="col-6">Year</label>
                                        <input type="year" value={year} name="year" className="col-6" p onChange={handleYearChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="phone" className="col-6">Description</label>
                                        <input type="text" value={description} name="description" className="col-6" onChange={handleDescriptionChange} />
                                     </div>
                                </div>
                            </form>)
    }

    return (

        <Modal show={show} onHide={handleClose}>
            <Modal.Header >
                <Modal.Title>Degrees:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container card borderClass">
                    <div className="row">
                        <div className="col-8">
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
                                    <div className="form-inputs">
                                        <label htmlFor="phone" className="col-6">Description</label>
                                        <input type="text" value={description} name="description" className="col-6" onChange={handleDescriptionChange} />
                                     </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-4 align-dropdowns">
                            <br />
                            <br/>
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        Weight
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div><br />
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        Priority
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                        <Dropdown.Item href="#/action-4">4</Dropdown.Item>
                                        <Dropdown.Item href="#/action-5">5</Dropdown.Item>
                                        <Dropdown.Item href="#/action-6">6</Dropdown.Item>
                                        <Dropdown.Item href="#/action-6">7</Dropdown.Item>
                                        <Dropdown.Item href="#/action-6">8</Dropdown.Item>
                                        <Dropdown.Item href="#/action-6">9</Dropdown.Item>
                                        <Dropdown.Item href="#/action-6">10</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div> <br />
                        </div>

                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                 <Button variant="danger" className="btn-primary" onClick={handleSubmit}>
                    Submit
                </Button>
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
