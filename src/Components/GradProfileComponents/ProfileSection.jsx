import React from 'react'
import PropTypes from 'prop-types'
import ProfileInfo from './ProfileInfo'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PersonalStory from './PersonalStory';
import "../../css/ProfileSection.css";
import axios from 'axios';

import { testGraduateUser } from '../../tests/testData/sampleGraduateUser';
const { personalStory } = testGraduateUser;

const token = ``;

const ProfileSection = props => {

	const testProfile2 = {
		firstName: "Test",
		lastName: "Name",
		personalEmail: "test@email.com",
		DFEmail: "test@digitalfutures.com",
		github: "https://github.com/",
		linkedIn: "https://www.linkedin.com/",
		phoneNumber: "01234567",
		profilePicture: "me.png",
		personalStory: " ",
		gender: "Male",
		nationality: "British",
		personality: "ESFJ - Consul"
	};

	const [graduateProfileData, setGraduateProfileData] = useState([]);
	const [getError, setGetError] = useState({ message: ``, count: 0 });
	const { _id } = useParams(); //this will not work without data in the database
	const getGraduateProfileById = async () => {
		try {
			const res = await axios
				.get(`${process.env.REACT_APP_DFXTRAURL}/api/content/graduateProfiles/${_id}`, { headers: { "x-access-token": token } })
				.set('x-access-token', token)
			return res.data.length ? res.data : new Error(`There was an error retrieving graduate data`);
		}
		catch (e) {
			setGetError({ message: `Data not available from the server: ${e.message}`, count: 0 });
			return [];
		}
	}

	useEffect(() => {
		const getData = async () => {
			setGraduateProfileData(await getGraduateProfileById());
		}
		setTimeout(() => getData(), 3000);
	}, []);

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
					<ProfileInfo profileInfo={testProfile2} />
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
