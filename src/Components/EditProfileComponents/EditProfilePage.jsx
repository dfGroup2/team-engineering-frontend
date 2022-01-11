import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../../css/EditProfilePage.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import EditPersonalInfoSection from './EditPersonalInfoSection';
import EditPersonalStory from './EditPersonalStory';

import { testGraduateUser } from '../../tests/testData/sampleGraduateUser2';

const EditProfilePage = props => {

	const graduateUserData = localStorage.getItem("user");

	const [graduateUser, setGraduateUser] = useState(``); //we may need to set the default state to {}

	if (graduateUserData) {
		setGraduateUser(graduateUserData);
	}

	const submitData = () => {
		//add an axios request to send a PUT(?) to update the data in the database
	}
	const resetData = () => {
		// setGraduateUser(graduateUserData);
	}

	return (
		<>
			<div className="back-button"><Link to="/graduatePage">back</Link></div>
			<div className="container card borderClass">
				<div className="row profile-padding">
					<h3 className="col-2">Your profile</h3>
					<br />
					<br />
					<div className="col-3">
						<p className="progressbar">Profile completion: </p>
						<ProgressBar now={50} />
						<br />
					</div>
					<p className="col-3"></p>
					<div className="col-4 ">
						<input type="submit" value="submit draft" className="btn btn-primary col-5 draft-btn" onClick={submitData} />
						&nbsp;&nbsp;
						<input type="submit" value="reset draft" className="btn btn-primary col-5 draft-btn" onClick={resetData} />
					</div>
				</div>
			</div>
			<div className="parent-container">
				<EditPersonalInfoSection graduateProfile={testGraduateUser.graduateProfile} />
			</div>
			<div className="parent-container">
				<EditPersonalStory graduateUserPersonalStory={testGraduateUser.personalStory} />
			</div>
		</>
	)
}

EditProfilePage.propTypes = {

}

export default EditProfilePage;
