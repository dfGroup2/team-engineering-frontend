import { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "../../css/PersonalStoryModal.css"
import axios from 'axios';


const PersonalStoryModal = ({ show, setShowModal, inputFieldHeaders, storyType, data }) => {
    const [university, setUniversity] = useState('');
    const [level, setLevel] = useState('');
    const [grade, setGrade] = useState('');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [description, setDescription] = useState('');
    const [school, setSchool] = useState('');
    const [examType, setExamType] = useState('');
    const [subject, setSubject] = useState('');
    const [year, setYear] = useState('');
    const [type, setType] = useState('');
    const [employerOrOtherOrganization, setEmployerOrOtherOrganization] = useState('');
    const [position, setPosition] = useState('');
    const [issuer, setIssuer] = useState('');
    const [award, setAward] = useState('');
    const [title, setTitle] = useState('');
    const [url, setURL] = useState('');
    const [weight, setWeight] = useState('');
    const [priority, setPriority] = useState('');
    const [_id, set_id] = useState('');

    const [graduateUserDataObject, setGraduateUserDataObject] = useState('');
    const [graduateUserDataObjectForAdd, setGraduateUserDataObjectForAdd] = useState('');
    const [getError, setGetError] = useState({ message: ``, count: 0 });

    const getGraduateUserDataById = async () => {
        const currentGraduateUserDataId = JSON.parse(localStorage.getItem('user')).graduateUserData;
        const webToken = JSON.parse(localStorage.getItem('user')).accessToken;
        try {
            const res = await axios
                .get(`${process.env.REACT_APP_DFXTRAURL}/api/content/graduateUsers/${currentGraduateUserDataId}`, { headers: { "x-access-token": webToken } })
            return objectIsEmpty(res.data) ? res.data : new Error(`There was an error retrieving graduate data`);
        }
        catch (e) {
            setGetError({ message: `Data not available from the server: ${e.message}`, count: 0 });
            return {};
        }
    }
    const objectIsEmpty = userData => {
        return Object.keys(userData).length > 0
    }

    useEffect(() => {
        const getData = async () => {
            setGraduateUserDataObject(await getGraduateUserDataById());
            setGraduateUserDataObjectForAdd(await getGraduateUserDataById());
        }
        //setTimeout(() => getData(), 3000);
        getData();

        if (data?.degree?.university) {
            setUniversity(data.degree.university);
            setSubject(data.degree.subject);
            setLevel(data.degree.level);
            setGrade(data.degree.grade);
            setFrom(data.degree.from);
            setTo(data.degree.to);
            setWeight(data.degree.weight);
            setPriority(data.degree.priority);
            setDescription(data.degree.description);
            set_id(data.degree._id);
        }
        if (data?.schoolQualifications?.school) {
            setSchool(data.schoolQualifications.school);
            setExamType(data.schoolQualifications.examType);
            setSubject(data.schoolQualifications.subject);
            setGrade(data.schoolQualifications.grade);
            setFrom(data.schoolQualifications.from);
            setTo(data.schoolQualifications.to);
            setWeight(data.schoolQualifications.weight);
            setPriority(data.schoolQualifications.priority);
            setDescription(data.schoolQualifications.description);
            set_id(data.schoolQualifications._id);
        }
        if (data?.workExperience?.type) {
            setType(data.workExperience.type);
            setEmployerOrOtherOrganization(data.workExperience.employerOrOtherOrganization);
            setPosition(data.workExperience.position);
            setFrom(data.workExperience.from);
            setTo(data.workExperience.to);
            setWeight(data.workExperience.weight);
            setPriority(data.workExperience.priority);
            setDescription(data.workExperience.description);
            set_id(data.workExperience._id);
        }
        if (data?.certificatesAndAwards?.year) {
            setType(data.certificatesAndAwards.type);
            setIssuer(data.certificatesAndAwards.issuer);
            setAward(data.certificatesAndAwards.award);
            setGrade(data.certificatesAndAwards.grade);
            setYear(data.certificatesAndAwards.year);
            setWeight(data.certificatesAndAwards.weight);
            setPriority(data.certificatesAndAwards.priority);
            setDescription(data.certificatesAndAwards.description);
            set_id(data.certificatesAndAwards._id);
        }
        if (data?.portfolio?.title) {
            setTitle(data.portfolio.title);
            setURL(data.portfolio.url);
            setYear(data.portfolio.year);
            setWeight(data.portfolio.weight);
            setPriority(data.portfolio.priority);
            setDescription(data.portfolio.description);
            set_id(data.portfolio._id);
        }
    }, [data]);

    const handleUniversityChange = changeEvent => {
        setUniversity(changeEvent.target.value);
    }

    const handleLevelChange = changeEvent => {
        setLevel(changeEvent.target.value);
    }

    const handleGradeChange = changeEvent => {
        setGrade(changeEvent.target.value);
    }

    const handleFromChange = changeEvent => {
        setFrom(changeEvent.target.value);
    }

    const handleToChange = changeEvent => {
        setTo(changeEvent.target.value);
    }

    const handleDescriptionChange = changeEvent => {
        setDescription(changeEvent.target.value);
    }

    const handleSchoolChange = changeEvent => {
        setSchool(changeEvent.target.value);
    }

    const handleExamTypeChange = changeEvent => {
        setExamType(changeEvent.target.value);
    }

    const handleSubjectChange = changeEvent => {
        setSubject(changeEvent.target.value);
    }

    const handleYearChange = changeEvent => {
        setYear(changeEvent.target.value);
    }

    const handleTypeChange = changeEvent => {
        setType(changeEvent.target.value);
    }

    const handleEmployerChange = changeEvent => {
        setEmployerOrOtherOrganization(changeEvent.target.value);
    }

    const handlePositionChange = changeEvent => {
        setPosition(changeEvent.target.value);
    }

    const handleIssuerChange = changeEvent => {
        setIssuer(changeEvent.target.value);
    }

    const handleAwardChange = changeEvent => {
        setAward(changeEvent.target.value);
    }

    const handleTitleChange = changeEvent => {
        setTitle(changeEvent.target.value);
    }

    const handleURLChange = changeEvent => {
        setURL(changeEvent.target.value);
    }

    const handleClose = () => {
        setShowModal(false);
        resetStateData();
        window.location.reload(false);
    };

    const resetStateData = () => {
        setUniversity('');
        setLevel('');
        setGrade('');
        setFrom('');
        setTo('');
        setDescription('');
        setSchool('');
        setExamType('');
        setSubject('');
        setYear('');
        setType('');
        setEmployerOrOtherOrganization('');
        setPosition('');
        setIssuer('');
        setAward('');
        setTitle('');
        setURL('');
        setWeight('');
        setPriority('');
        set_id('');
    }

    const currentGraduateUserDataId = JSON.parse(localStorage.getItem('user')).graduateUserData;
    const webToken = JSON.parse(localStorage.getItem('user')).accessToken;

    const handleSubmit = async () => {
        let tempGradUser = graduateUserDataObject;
        let tempGUObjectForAdd = graduateUserDataObjectForAdd;

        if (storyType === 'Degrees') {
            tempGradUser.personalStory.degree = [{ university, subject, level, grade, "date": { from, to }, weight, priority, description }];
            if (!_id) {
                const concatenatedObject = tempGUObjectForAdd.personalStory.degree.concat(tempGradUser.personalStory.degree);
                tempGUObjectForAdd.personalStory.degree = concatenatedObject;
                tempGradUser = tempGUObjectForAdd;
            }
            else {
                const rowToEditIndex = tempGUObjectForAdd.personalStory.degree.findIndex(o => o._id === _id);
                tempGUObjectForAdd.personalStory.degree[rowToEditIndex] = tempGradUser.personalStory.degree[0];
                tempGradUser = tempGUObjectForAdd;
            }
        }

        if (storyType === 'School Qualifications') {
            tempGradUser.personalStory.schoolQualifications = [{ school, examType, subject, grade, "year": { from, to }, weight, priority, description }];
            if (!_id) {
                const concatenatedObject = tempGUObjectForAdd.personalStory.schoolQualifications.concat(tempGradUser.personalStory.schoolQualifications);
                tempGUObjectForAdd.personalStory.schoolQualifications = concatenatedObject;
                tempGradUser = tempGUObjectForAdd;
            }
            else {
                const rowToEditIndex = tempGUObjectForAdd.personalStory.schoolQualifications.findIndex(o => o._id === _id);
                tempGUObjectForAdd.personalStory.schoolQualifications[rowToEditIndex] = tempGradUser.personalStory.schoolQualifications[0];
                tempGradUser = tempGUObjectForAdd;
            }
        }

        if (storyType === 'Work Experience') {
            tempGradUser.personalStory.workExperience = [{ type, employerOrOtherOrganization, position, "date": { from, to }, weight, priority, description }];
            if (!_id) {
                const concatenatedObject = tempGUObjectForAdd.personalStory.workExperience.concat(tempGradUser.personalStory.workExperience);
                tempGUObjectForAdd.personalStory.workExperience = concatenatedObject;
                tempGradUser = tempGUObjectForAdd;
            }
            else {
                const rowToEditIndex = tempGUObjectForAdd.personalStory.workExperience.findIndex(o => o._id === _id);
                tempGUObjectForAdd.personalStory.workExperience[rowToEditIndex] = tempGradUser.personalStory.workExperience[0];
                tempGradUser = tempGUObjectForAdd;
            }
        }

        if (storyType === 'Certificates') {
            tempGradUser.personalStory.certificatesAndAwards = [{ type, issuer, award, grade, year, weight, priority, description }];
            if (!_id) {
                const concatenatedObject = tempGUObjectForAdd.personalStory.certificatesAndAwards.concat(tempGradUser.personalStory.certificatesAndAwards);
                tempGUObjectForAdd.personalStory.certificatesAndAwards = concatenatedObject;
                tempGradUser = tempGUObjectForAdd;
            }
            else {
                const rowToEditIndex = tempGUObjectForAdd.personalStory.certificatesAndAwards.findIndex(o => o._id === _id);
                tempGUObjectForAdd.personalStory.certificatesAndAwards[rowToEditIndex] = tempGradUser.personalStory.certificatesAndAwards[0];
                tempGradUser = tempGUObjectForAdd;
            }
        }

        if (storyType === 'Portfolio') {
            tempGradUser.personalStory.portfolio = [{ title, url, year, weight, priority, description }];
            if (!_id) {
                const concatenatedObject = tempGUObjectForAdd.personalStory.portfolio.concat(tempGradUser.personalStory.portfolio);
                tempGUObjectForAdd.personalStory.portfolio = concatenatedObject;
                tempGradUser = tempGUObjectForAdd;
            }
            else {
                const rowToEditIndex = tempGUObjectForAdd.personalStory.portfolio.findIndex(o => o._id === _id);
                tempGUObjectForAdd.personalStory.portfolio[rowToEditIndex] = tempGradUser.personalStory.portfolio[0];
                tempGradUser = tempGUObjectForAdd;
            }
        }

        const res = await axios.put(`${process.env.REACT_APP_DFXTRAURL}/api/content/graduateUsers/${currentGraduateUserDataId}`, tempGradUser, { headers: { "x-access-token": webToken } });
        handleClose();
    }

    const handleWeightChange = event => {
        document.getElementById("weight-dropdown").innerHTML = event.target.innerText;
        setWeight(event.target.innerText);
    }

    const handlePriorityChange = event => {
        document.getElementById("priority-dropdown").innerHTML = event.target.innerText;
        setPriority(event.target.innerText);
    }

    const renderDegrees = () => {
        return (
            <form action="">
                <div className="">
                    <div className="form-inputs">
                        <label htmlFor="university" className="col-6">University</label>
                        <input type="text" value={university} name="university" className="col-6" onChange={handleUniversityChange} />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="subject" className="col-6">Degree Subject</label>
                        <input type="text" value={subject} name="subject" className="col-6" onChange={handleSubjectChange} />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="level" className="col-6">Degree Level</label>
                        <input type="text" value={level} name="level" className="col-6" onChange={handleLevelChange} />
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
            </form>
        );
    }

    const renderSchoolQuals = () => {
        return (
            <form action="">
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
                        <input type="text" value={subject} name="subject" className="col-6" onChange={handleSubjectChange} />
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
            </form>
        );
    }

    const renderWorkExperience = () => {
        return (
            <form action="">
                <div className="">
                    <div className="form-inputs">
                        <label htmlFor="type" className="col-6">Type</label>
                        <input type="text" value={type} name="type" className="col-6" onChange={handleTypeChange} />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="employerOrOtherOrganization" className="col-6">Employer or other</label>
                        <input type="text" value={employerOrOtherOrganization} name="employerOrOtherOrganization" className="col-6" onChange={handleEmployerChange} />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="position" className="col-6">Position</label>
                        <input type="text" value={position} name="position" className="col-6" onChange={handlePositionChange} />
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
            </form>
        );
    }

    const renderCertificates = () => {
        return (
            <form action="">
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
                        <input type="text" value={award} name="award" className="col-6" onChange={handleAwardChange} />
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
            </form>
        );
    }

    const renderPortfolio = () => {
        return (
            <form action="">
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
                        <input type="date" value={year} name="year" className="col-6" onChange={handleYearChange} />
                    </div>
                    <div className="form-inputs">
                        <label htmlFor="description" className="col-6">Description</label>
                        <input type="text" value={description} name="description" className="col-6" onChange={handleDescriptionChange} />
                    </div>
                </div>
            </form>
        );
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
                            <br />
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="primary" id="weight-dropdown">
                                        {weight ? weight : "Weight"}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={handleWeightChange}>S</Dropdown.Item>
                                        <Dropdown.Item onClick={handleWeightChange}>M</Dropdown.Item>
                                        <Dropdown.Item onClick={handleWeightChange}>L</Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </div><br />
                            <div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="primary" id="priority-dropdown">
                                        {priority ? priority : "Priority"}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={handlePriorityChange}>1</Dropdown.Item>
                                        <Dropdown.Item onClick={handlePriorityChange}>2</Dropdown.Item>
                                        <Dropdown.Item onClick={handlePriorityChange}>3</Dropdown.Item>
                                        <Dropdown.Item onClick={handlePriorityChange}>4</Dropdown.Item>
                                        <Dropdown.Item onClick={handlePriorityChange}>5</Dropdown.Item>
                                        <Dropdown.Item onClick={handlePriorityChange}>6</Dropdown.Item>
                                        <Dropdown.Item onClick={handlePriorityChange}>7</Dropdown.Item>
                                        <Dropdown.Item onClick={handlePriorityChange}>8</Dropdown.Item>
                                        <Dropdown.Item onClick={handlePriorityChange}>9</Dropdown.Item>
                                        <Dropdown.Item onClick={handlePriorityChange}>10</Dropdown.Item>
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
    );
}

export default PersonalStoryModal
