import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'
import '../../css/EditPersonalInfoSection.css'
import Dropdown from 'react-bootstrap/Dropdown';

const EditPersonalInfoSection = props => {
    const [name, setName] = useState(``);
    const [email, setEmail] = useState(``);
    const [dfEmail, setDfEmail] = useState(``);
    const [github, setGithub] = useState(``);
    const [linkedin, setLinkedin] = useState(``);
    const [phoneNumber, setPhoneNumber] = useState(``);

    const handleNameChange = event => {
        setName(event.target.value);
    }

    const handlePersonalEmailChange = event => {
        setEmail(event.target.value);
    }

    const handleDfEmailChange = event => {
        setDfEmail(event.target.value);
    }

    const handleGithubChange = event => {
        setGithub(event.target.value);
    }

    const handleLinkedinChange = event => {
        setLinkedin(event.target.value);
    }

    const handlePhoneNumberChange = event => {
        setPhoneNumber(event.target.value);
    }

    return (
        <div className="container card borderClass">
            <h3 className="col-3">Personal Information</h3>
            <div className="row">
                <div className="col-4">
                    <form action="">
                        <div className="">
                            <div className="form-inputs">
                                <label htmlFor="Name" className="col-6">Name</label>
                                <input type="text" value={name} name="Name" className="col-6" placeholder="Name" onChange={handleNameChange} />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="p-email" className="col-6">Personal Email</label>
                                <input type="email" value={email} name="p-email" className="col-6" placeholder="Personal Email" onChange={handlePersonalEmailChange} />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="df-email" className="col-6">Digital Futures Email</label>
                                <input type="email" value={dfEmail} name="df-email" className="col-6" placeholder="DF Email" onChange={handleDfEmailChange} />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="GitHub" className="col-6">GitHub</label>
                                <input type="text" value={github} name="GitHub" className="col-6" placeholder="Github account" onChange={handleGithubChange} />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="linkedIn" className="col-6">LinkedIn</label>
                                <input type="text" value={linkedin} name="linkedIn" className="col-6" placeholder="Linkedin account" onChange={handleLinkedinChange} />
                            </div>
                            <div className="form-inputs">
                                <label htmlFor="phone" className="col-6">Phone</label>
                                <input type="number" value={phoneNumber} name="phone" className="col-6" placeholder="Phone number" onChange={handlePhoneNumberChange} />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-4 align-dropdowns">
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Gender
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
                                Nationality
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
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Personality Type
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">INTJ - Architect</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">ENTJ - Commander</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">ENFJ - Protagonist</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">ESTJ - Executive</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">ISFP - Adventurer</Dropdown.Item>
                                <Dropdown.Item href="#/action-6">Prefer not to say</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <img src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" alt="" className="thumbnail avatar-image" />
                    </div>
                    <input type="file" name="uploadfile" id="img" hidden />
                    <label htmlFor="img">Upload Image</label>
                </div>
            </div>
        </div>
    )
}

EditPersonalInfoSection.propTypes = {

}

export default EditPersonalInfoSection
