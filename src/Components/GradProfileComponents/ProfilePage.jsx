import React from 'react'
import ProfileSection from './ProfileSection'
import InfoSection from './InfoSection'
import TrainingSection from './TrainingSection'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {

  const [graduateUserData, setGraduateUserData] = useState({});
  const [getError, setGetError] = useState({ message: ``, count: 0 });

  const getGraduateUserDataById = async () => {
    const currentGraduateUserDataId = JSON.parse(localStorage.getItem('user')).graduateUserData;
    const webToken = JSON.parse(localStorage.getItem('user')).accessToken;
    try {

      const res = await axios
        .get(`${process.env.REACT_APP_DFXTRAURL}/api/content/graduateUsers/${currentGraduateUserDataId}`, { headers: { "x-access-token": webToken } })
      return objectIsEmpty(res.data) ? res.data : new Error(`There was an error retrieving graduate data`);

    }
    catch (e) {
      setGetError({ message: `Data not available from the server: ${e.message}`, count: 0 });
      return {};
    }
  }

  useEffect(() => {
    const getData = async () => {
      setGraduateUserData(await getGraduateUserDataById());
    }
    getData();
  }, []);

  const objectIsEmpty = userData => {
    return Object.keys(userData).length > 0
  }

  const capitaliseFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1);
  }

  return (
    <>
      {
        objectIsEmpty(graduateUserData) &&
        <div>
          <div className="parent-container">
            <ProfileSection graduateUserData={graduateUserData} capitaliseFirstLetter={capitaliseFirstLetter} />
          </div>
          <div className="parent-container">
            <TrainingSection graduateUserData={graduateUserData} capitaliseFirstLetter={capitaliseFirstLetter} />
          </div>
          <div className="parent-container">
            <InfoSection infoData={graduateUserData.personalInfo} />
          </div >
          <br /><br />
        </div>
      }
    </>
  )
}

export default ProfilePage
