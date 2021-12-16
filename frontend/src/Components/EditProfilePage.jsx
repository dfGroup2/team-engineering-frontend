import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import '../css/EditProfilePage.css';

const EditProfilePage = props => {
	return (
		<div className="container card borderClass">
			<div className="row">
				<h3 className="col-2">Your profile</h3>
				<br />
				<br />
				<div className="col-3">
					<p>Profile completion: </p>
				</div>
				<p className="col-3"></p>
				<div className="col-4 ">
					<input type="submit" value="submit draft" className="btn btn-primary col-5 draft-btn" />
					&nbsp;&nbsp;
					<input type="submit" value="reset draft" className="btn btn-primary col-5 draft-btn" />
				</div>
			</div>
		</div>
	)
}

EditProfilePage.propTypes = {

}

export default EditProfilePage;
