import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../../css/EditProfilePage.css';
import ProgressBar from 'react-bootstrap/ProgressBar'
import EditPersonalInfoSection from './EditPersonalInfoSection';
import EditPersonalStory from './EditPersonalStory';
import axios from 'axios';

const EditProfilePage = props => {
	let navigate = useNavigate()
	const [graduateUserData, setGraduateUserData] = useState('');
	const [getError, setGetError] = useState({ message: ``, count: 0 });
	const [progressBarValue, setProgressBarValue] = useState(0);

	const getGraduateUserDataById = async () => {
		try {
			const currentGraduateUserDataId = JSON.parse(localStorage.getItem('user')).graduateUserData;
			const webToken = JSON.parse(localStorage.getItem('user')).accessToken;
			const res = await axios
				.get(`${process.env.REACT_APP_DFXTRAURL}/api/content/graduateUsers/${currentGraduateUserDataId}`, { headers: { "x-access-token": webToken } })
			return objectIsEmpty(res.data) ? res.data : new Error(`There was an error retrieving graduate data`);
		}
		catch (e) {
			setGetError({ message: `Data not available from the server: ${e.message}`, count: 0 });
			return {};
		}
	}
	const objectIsEmpty = userData => {
		return Object.keys(userData).length > 0
	}

	useEffect(() => {
		const getData = async () => {
			const gradUserData = await getGraduateUserDataById()
			setGraduateUserData(gradUserData);
			if (objectIsEmpty(gradUserData)) {
				setProgressBarValue(calculateProgressCompletion(gradUserData));
			}
		}
		//setTimeout(() => getData(), 3000);
		getData();
	}, []);

	const calculateProgressCompletion = (graduateUser) => {
		if (graduateUser) {
			const pStory = graduateUser.personalStory;
			const pInfo = graduateUser.graduateProfile;
			const length = ((pInfo.firstName ? 1 : 0) + (pInfo.lastName ? 1 : 0) + (pInfo.personalEmail ? 1 : 0) + (pInfo.DFEmail ? 1 : 0) + (pInfo.profilePicture ? 1 : 0) + (pInfo.phoneNumber ? 1 : 0) + (pInfo.gender === "defaultGender" ? 0 : 1) + (pInfo.nationality === "defaultNationality" ? 0 : 1) + (pInfo.personality === "defaultPersonality" ? 0 : 1) + pStory.degree.length + pStory.schoolQualifications.length + pStory.workExperience.length + pStory.certificatesAndAwards.length + pStory.portfolio.length) / 19 * 100;
			return length;
		}
		return 0;
	}

	const submitData = async () => {
		const currentGraduateUserDataId = JSON.parse(localStorage.getItem('user')).graduateUserData;
		const webToken = JSON.parse(localStorage.getItem('user')).accessToken;
		const res = await axios.put(`${process.env.REACT_APP_DFXTRAURL}/api/content/graduateUsers/${currentGraduateUserDataId}`, graduateUserData, { headers: { "x-access-token": webToken } });
		navigate("/graduatePage");
	}

	const resetData = async () => {
		setGraduateUserData(await getGraduateUserDataById());
	}

	const updateGraduateUserData = async graduateUserInfo => {
		const gradUserDataTempObject = graduateUserData;
		gradUserDataTempObject.graduateProfile = graduateUserInfo;
		setGraduateUserData(gradUserDataTempObject);
	}

	return (
		<>
			{objectIsEmpty(graduateUserData) &&
				<div className="parent-container">
					<div className="back-outer">
						<div className="back-button"><Link to="/graduatePage">Go back</Link></div>
					</div>
					<div className="container card borderClass editCard">
						<div className="row profile-padding">
							<h3 className="col-2">Your profile</h3>
							<br />
							<br />
							<div className="col-3">
								<p className="progressbar">Profile completion: </p>
								{/* <ProgressBar now={50} /> */}
								<ProgressBar now={progressBarValue} />
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
						<EditPersonalInfoSection graduateProfile={graduateUserData.graduateProfile} dataForEdit={updateGraduateUserData} />
					</div>
					<div className="parent-container">
						<EditPersonalStory graduateUserPersonalStory={graduateUserData.personalStory} />
					</div>
				</div>
			}
		</>
	)
}

export default EditProfilePage;
