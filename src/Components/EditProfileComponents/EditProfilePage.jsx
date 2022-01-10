import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import '../../css/EditProfilePage.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import EditPersonalInfoSection from './EditPersonalInfoSection';
import EditPersonalStory from './EditPersonalStory';

const EditProfilePage = props => {

	const graduateUserData = localStorage.getItem("user");

	const submitData = () => { }
	const resetData = () => { }

	return (
		<>
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
				<EditPersonalInfoSection />
			</div>
			<div className="parent-container">
				<EditPersonalStory />
			</div>
		</>
	)
}

EditProfilePage.propTypes = {

}

export default EditProfilePage;
