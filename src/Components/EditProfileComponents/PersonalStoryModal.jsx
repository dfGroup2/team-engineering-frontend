import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../../css/PersonalStoryModal.css"


const PersonalStoryModal = ({ show, setShowModal, inputFieldHeaders, storyType, data }) => {
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

    useEffect(() => {
        if (data?.degree) {
            setUniversity(data.degree.university)
            setDegreeSubject(data.degree.subject)
            setDegreeLevel(data.degree.level)
            setGrade(data.degree.grade)
            setFrom(data.degree.from)
            setTo(data.degree.to)
            setWeight(data.degree.weight)
            setPriority(data.degree.priority)
            setDescription(data.degree.description)
        }
        if (data?.schoolQuals) {
            setSchool(data.schoolQuals.school)
            setExamType(data.schoolQuals.examType)
            setSubject(data.schoolQuals.subject)
            setGrade(data.schoolQuals.grade)
            setYear(data.schoolQuals.year)
            setWeight(data.schoolQuals.weight)
            setPriority(data.schoolQuals.priority)
            setDescription(data.schoolQuals.description)
        }
        if (data?.workExperience) {
            setType(data.workExperience.type)
            setEmployer(data.workExperience.employer)
            setPosition(data.workExperience.position)
            setFrom(data.workExperience.from)
            setTo(data.workExperience.to)
            setWeight(data.workExperience.weight)
            setPriority(data.workExperience.priority)
            setDescription(data.workExperience.description)

        }
        if (data?.certificates) {
            setType(data.certificates.type)
            setIssuer(data.certificates.issuer)
            setAward(data.certificates.award)
            setGrade(data.certificates.grade)
            setYear(data.certificates.year)
            setWeight(data.certificates.weight)
            setPriority(data.certificates.priority)
            setDescription(data.certiicates.description)
        }
        if (data?.portfolio) {
            setTitle(data.portfolio.title)
            setURL(data.portfolio.url)
            setYear(data.porfolio.year)
            setWeight(data.portfolio.weight)
            setPriority(data.porfolio.priority)
            setDescription(data.portfolio.description)

        }
        
    }, [data])


    console.log(JSON.stringify(data));
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
    const handleClose = () => {
        setShowModal(false)
        setUniversity('')
        setDegreeSubject('')
        setDegreeLevel('')
        setGrade('')
        setFrom('')
        setTo('')
        setDescription('')
        setSchool('')
        setExamType('')
        setSubject('')
        setYear('')
        setType('')
        setEmployer('')
        setPosition('')
        setIssuer('')
        setAward('')
        setTitle('')
        setURL('')
    };

    const handleSubmit = () => {

    }
    const renderDegrees = () => {
        return (<form action="">
                                <div className="">
                                    <div className="form-inputs">
                                        <label htmlFor="university" className="col-6">University</label>
                                        <input type="text" value={university} name="university" className="col-6" onChange={handleUniversityChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="degreeSubject" className="col-6">DegreeSubject</label>
                                        <input type="text" value={degreeSubject} name="degreeSubject" className="col-6" onChange={handleDegreeSubjectChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="degreeLevel" className="col-6">Degree Level</label>
                                        <input type="text" value={degreeLevel} name="degreeLevel" className="col-6" p onChange={handleDegreeLevelChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="grade" className="col-6">Grade</label>
                                        <input type="text" value={grade} name="grade" className="col-6" onChange={handleGradeChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="from" className="col-6">From</label>
                                        <input type="date" value={from} name="from" className="col-6" onChange={handleFromChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="to" className="col-6">To</label>
                                        <input type="date" value={to} name="to" className="col-6" onChange={handleToChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="description" className="col-6">Description</label>
                                        <input type="text" value={description} name="description" className="col-6" onChange={handleDescriptionChange} />
                                     </div>
                                </div>
                            </form>)
    }

    const renderSchoolQuals = () => {
        return (<form action="">
                                <div className="">
                                    <div className="form-inputs">
                                        <label htmlFor="school" className="col-6">School</label>
                                        <input type="text" value={school} name="school" className="col-6" onChange={handleSchoolChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="examType" className="col-6">Exam Type</label>
                                        <input type="text" value={examType} name="examType" className="col-6" onChange={handleExamTypeChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="subject" className="col-6">Subject</label>
                                        <input type="text" value={subject} name="subject" className="col-6" p onChange={handleSubjectChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="grade" className="col-6">Grade</label>
                                        <input type="text" value={grade} name="grade" className="col-6" onChange={handleGradeChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="year" className="col-6">Year</label>
                                        <input type="date" value={year} name="year" className="col-6" onChange={handleYearChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="description" className="col-6">Description</label>
                                        <input type="text" value={description} name="description" className="col-6" onChange={handleDescriptionChange} />
                                     </div>
                                </div>
                            </form>)
    }

    const renderWorkExperience = () => {
        return(<form action="">
                                <div className="">
                                    <div className="form-inputs">
                                        <label htmlFor="type" className="col-6">Type</label>
                                        <input type="text" value={type} name="type" className="col-6" onChange={handleTypeChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="employer" className="col-6">Employer or other</label>
                                        <input type="text" value={employer} name="employer" className="col-6" onChange={handleEmployerChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="position" className="col-6">Position</label>
                                        <input type="text" value={position} name="position" className="col-6" p onChange={handlePositionChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="from" className="col-6">From</label>
                                        <input type="date" value={from} name="from" className="col-6" onChange={handleFromChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="to" className="col-6">To</label>
                                        <input type="date" value={to} name="to" className="col-6" onChange={handleToChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="description" className="col-6">Description</label>
                                        <input type="text" value={description} name="description" className="col-6" onChange={handleDescriptionChange} />
                                     </div>
                                </div>
                            </form>)
    }

    const renderCertificates = () => {
        return(<form action="">
                                <div className="">
                                    <div className="form-inputs">
                                        <label htmlFor="type" className="col-6">Type</label>
                                        <input type="text" value={type} name="type" className="col-6" onChange={handleTypeChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="issuer" className="col-6">Issuer</label>
                                        <input type="text" value={issuer} name="issuer" className="col-6" onChange={handleIssuerChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="award" className="col-6">Award</label>
                                        <input type="text" value={award} name="award" className="col-6" p onChange={handleAwardChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="grade" className="col-6">Grade</label>
                                        <input type="text" value={grade} name="grade" className="col-6" onChange={handleGradeChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="year" className="col-6">Year</label>
                                        <input type="date" value={year} name="year" className="col-6" onChange={handleYearChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="description" className="col-6">Description</label>
                                        <input type="text" value={description} name="description" className="col-6" onChange={handleDescriptionChange} />
                                     </div>
                                </div>
                            </form>)
    }

    const renderPortfolio = () => {
        return(<form action="">
                                <div className="">
                                    <div className="form-inputs">
                                        <label htmlFor="title" className="col-6">Title</label>
                                        <input type="text" value={title} name="title" className="col-6" onChange={handleTitleChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="url" className="col-6">URL</label>
                                        <input type="url" value={url} name="url" className="col-6" onChange={handleURLChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="year" className="col-6">Year</label>
                                        <input type="date" value={year} name="year" className="col-6" p onChange={handleYearChange} />
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor="description" className="col-6">Description</label>
                                        <input type="text" value={description} name="description" className="col-6" onChange={handleDescriptionChange} />
                                     </div>
                                </div>
                            </form>)
    }

    return (

        <Modal show={show} onHide={handleClose}>
            <Modal.Header >
                <Modal.Title>{storyType}:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container card borderClass">
                    <div className="row">
                        <div className="col-8 input-fields">
                            {storyType === 'Degrees' && renderDegrees()} 
                            {storyType === 'School Qualifications' && renderSchoolQuals()}
                            {storyType === 'Work Experience' && renderWorkExperience()} 
                            {storyType === 'Certificates' && renderCertificates()}
                            {storyType === 'Portfolio' && renderPortfolio()} 
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
