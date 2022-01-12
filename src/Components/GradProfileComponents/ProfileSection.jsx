import React from 'react'
import PropTypes from 'prop-types'
import ProfileInfo from './ProfileInfo'
import { Link } from 'react-router-dom';
import PersonalStory from './PersonalStory';
import "../../css/ProfileSection.css";
//import { testGraduateUser } from '../../tests/testData/sampleGraduateUser';
//const { personalStory } = testGraduateUser;

const ProfileSection = ({ graduateUserData, capitaliseFirstLetter }) => {
	//graduateUserData successfully passed as prop
	const { graduateProfile, personalStory } = graduateUserData;
	const removeMongoId = object => {
		if (object.hasOwnProperty('_id')) {
			delete object._id;
		}
		return object;
	}

	return (
		<div className="container card borderClass editCard">
			<div className="row mt-3">
				<h3 className="col-2 fw-bold">Your profile</h3>
				<br />
				<br />
				<Link className="col-2 edit-link" to="/edit" >Edit</Link>
			</div>
			<div className="row mt-3">
				<div className="col-4 profile-info-div">
					<ProfileInfo profileInfo={removeMongoId(graduateProfile)} capitaliseFirstLetter={capitaliseFirstLetter} />
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
