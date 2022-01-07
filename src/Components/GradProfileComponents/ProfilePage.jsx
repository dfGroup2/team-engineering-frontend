import React from 'react'
import ProfileSection from './ProfileSection'
import InfoSection from './InfoSection'
import TrainingSection from './TrainingSection'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { testGraduateUser } from '../../tests/testData/sampleGraduateUser';
const { graduateTraining, personalInfo } = testGraduateUser;
const token = ``;

const ProfilePage = () => {

  const [graduateProfileData, setGraduateProfileData] = useState({});
  const [getError, setGetError] = useState({ message: ``, count: 0 });
  const { _id } = useParams(); //this will not work without data in the database
  const getGraduateProfileById = async () => {
    const currentGraduateUserDataId = localStorage.getItem('graduateUserData');
    const webToken = localStorage.getItem('accessToken');
    try {
      const res = await axios
        .get(`${process.env.REACT_APP_DFXTRAURL}/api/content/graduateUsers/${currentGraduateUserDataId}`, { headers: { "x-access-token": webToken } })
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
    <div>
      <div className="parent-container">
        <ProfileSection graduateUserData={testGraduateUser} />
      </div>
      <div className="parent-container">
        <TrainingSection graduateTrainingData={graduateTraining} />
      </div>
      <div className="parent-container">
        <InfoSection infoData={personalInfo} />
      </div >
      <br /><br />
    </div>
  )
}

export default ProfilePage
