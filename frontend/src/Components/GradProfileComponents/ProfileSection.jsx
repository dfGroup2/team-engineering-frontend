import React from 'react'
import PropTypes from 'prop-types'
import ProfileInfo from './ProfileInfo'
import { Link } from 'react-router-dom';
import PersonalStory from './PersonalStory';
import "../../css/ProfileSection.css";
const ProfileSection = props => {
	return (
		<div className="container borderClass">
			<div className="row">
				<h3 className="col-2">Your profile</h3>
				<br />
				<br />
				<Link className="col-2 edit-link" to="/edit" >Edit</Link>
			</div>
			<div className="row">
				<div className="col-2">
					<ProfileInfo />
				</div>
				<p className="col-2"></p>
				<div className="col-8">
					<PersonalStory />
				</div>
			</div>
		</div>
	)
}

ProfileSection.propTypes = {

}

export default ProfileSection;
