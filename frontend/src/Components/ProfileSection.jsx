import React from 'react'
import PropTypes from 'prop-types'
import ProfileInfo from './ProfileInfo'
import { Link } from 'react-router-dom';
const ProfileSection = props => {
	return (
		<div className="container">
			<div className="row">
				<h3 className="col-2">Your profile</h3>
				<br />
				<br />
				<Link className="col-2" to="/">Edit</Link>
			</div>
			<div className="col-2 card">
				<ProfileInfo />
			</div>
		</div>
	)
}

ProfileSection.propTypes = {

}

export default ProfileSection;
