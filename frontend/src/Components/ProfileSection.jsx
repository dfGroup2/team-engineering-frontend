import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const ProfileSection = props => {
	return (
		<div>
			<h3>Your profile</h3>
			<Link to="/">Edit</Link>
		</div>
	)
}

ProfileSection.propTypes = {

}

export default ProfileSection;
