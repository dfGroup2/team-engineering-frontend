import React from 'react'
import PropTypes from 'prop-types'
import ProfileInfo from './ProfileInfo'
import { Link } from 'react-router-dom';
import PersonalStory from './PersonalStory';
import "../../css/ProfileSection.css";
//import { testGraduateUser } from '../../tests/testData/sampleGraduateUser';
//const { personalStory } = testGraduateUser;



const ProfileSection = ({ graduateUserData }) => {
	//graduateUserData successfully passed as prop
	const { graduateProfile, personalStory } = graduateUserData;


	return (
		<div className="container borderClass">
			<div className="row">
				<h3 className="col-2">Your profile</h3>
				<br />
				<br />
				<Link className="col-2 edit-link" to="/edit" >Edit</Link>
			</div>
			<div className="row">
				<div className="col-4 profile-info-div">
					<ProfileInfo profileInfo={graduateProfile} />
				</div>
				<p className="col-1"></p>
				<div className="col-6">
					<PersonalStory personalStoryData={personalStory} />
				</div>
			</div>
		</div>
	)
}

ProfileSection.propTypes = {

}

export default ProfileSection;
