import React from 'react'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import '../../css/EditPersonalInfoSection.css'
import Dropdown from 'react-bootstrap/Dropdown';

const EditPersonalInfoSection = ({ graduateProfile } /*, graduateProfileEdited }*/) => {
    // the graduateProfileEdited prop should be used to pass the data changed back up to the EditProfilePage component, this would then (hopefully) allow the data to be sent to the server when the SubmitDraft button is clicked.
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [dfEmail, setDfEmail] = useState('');
    const [github, setGithub] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [personality, setPersonality] = useState('');
    const [imagePath, setImagePath] = useState('');

    useEffect(() => {
        if (graduateProfile) {
            setName((graduateProfile.firstName + " " + graduateProfile.lastName));
            setEmail(graduateProfile.personalEmail);
            setDfEmail(graduateProfile.DFEmail);
            setGithub(graduateProfile.github);
            setLinkedin(graduateProfile.linkedIn);
            setPhoneNumber(graduateProfile.phoneNumber);
            setFirstName(graduateProfile.firstName);
            setLastName(graduateProfile.lastName);
            setGender(graduateProfile.gender);
            setNationality(graduateProfile.nationality);
            setPersonality(graduateProfile.personality);
            setImagePath(graduateProfile.profilePicture);
        }
    }, [graduateProfile]);

    let graduateUserProfile = {
        firstName: firstName, lastName: lastName, personalEmail: email, DFEmail: dfEmail, github: github, linkedIn: linkedin, phoneNumber: phoneNumber, profilePicture: imagePath, personalStory: "", gender: gender, nationality: nationality, personality: personality
    };

    const handleNameChange = event => {
        setName(event.target.value);

        if (event.target.value.includes(" ")) {
            if (event.target.value.length > 0) {
                const nameArray = event.target.value.split(" ");
                setFirstName(nameArray[0]);
                if (nameArray.length > 1) {
                    setLastName(nameArray[1]);
                }
            }
        }
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

    const handleGenderClick = event => {
        document.getElementById("gender-dropdown").innerHTML = event.target.innerText;
        setGender(event.target.innerText);
    }

    const handleNationalityClick = event => {
        document.getElementById("nationality-dropdown").innerHTML = event.target.innerText;
        setNationality(event.target.innerText);
    }

    const handlePersonalityClick = event => {
        document.getElementById("personality-dropdown").innerHTML = event.target.innerText;
        setPersonality(event.target.innerText);
    }

    const handleFileUpload = event => {
        setImagePath(event.target.value);
    }

    return (
        <div className="container card borderClass editCard">
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
                            <Dropdown.Toggle variant="primary" id="gender-dropdown">
                                {gender ? gender : "Gender"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handleGenderClick} value="Male">Male</Dropdown.Item>
                                <Dropdown.Item onClick={handleGenderClick}>Female</Dropdown.Item>
                                <Dropdown.Item onClick={handleGenderClick}>Non-binary</Dropdown.Item>
                                <Dropdown.Item onClick={handleGenderClick}>Transgender</Dropdown.Item>
                                <Dropdown.Item onClick={handleGenderClick}>Prefer not to say</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div><br />
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="nationality-dropdown">
                                {nationality ? nationality : "Nationality"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handleNationalityClick}>Great Britain and Northern Ireland</Dropdown.Item>
                                <Dropdown.Item onClick={handleNationalityClick}>United States of America</Dropdown.Item>
                                <Dropdown.Item onClick={handleNationalityClick}>France</Dropdown.Item>
                                <Dropdown.Item onClick={handleNationalityClick}>Germany</Dropdown.Item>
                                <Dropdown.Item onClick={handleNationalityClick}>Italy</Dropdown.Item>
                                <Dropdown.Item onClick={handleNationalityClick}>Prefer not to say</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div> <br />
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="personality-dropdown">
                                {personality ? personality : "Personality Type"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={handlePersonalityClick}>INTJ - Architect</Dropdown.Item>
                                <Dropdown.Item onClick={handlePersonalityClick}>ENTJ - Commander</Dropdown.Item>
                                <Dropdown.Item onClick={handlePersonalityClick}>ENFJ - Protagonist</Dropdown.Item>
                                <Dropdown.Item onClick={handlePersonalityClick}>ESTJ - Executive</Dropdown.Item>
                                <Dropdown.Item onClick={handlePersonalityClick}>ISFP - Adventurer</Dropdown.Item>
                                <Dropdown.Item onClick={handlePersonalityClick}>Prefer not to say</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="col-4">
                    <div>
                        <img src={graduateUserProfile.profilePicture ? imagePath : "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"} alt="profilePicture" className="thumbnail avatar-image" />
                    </div>
                    <input type="file" accept="image/*" name="uploadfile" id="img" hidden onChange={handleFileUpload} />
                    <label htmlFor="img" className="img-label">Upload Image</label>
                </div>
            </div>
        </div>
    )
}

EditPersonalInfoSection.propTypes = {

}

export default EditPersonalInfoSection
