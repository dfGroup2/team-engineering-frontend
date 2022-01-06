import React from 'react'
import ProfileSection from './ProfileSection'
import InfoSection from './InfoSection'
import TrainingSection from './TrainingSection'

import { testGraduateUser } from '../../tests/testData/sampleGraduateUser';
const { graduateTraining, personalInfo } = testGraduateUser;

const ProfilePage = props => {


  return (
    <div>
      <div className="parent-container">
        <ProfileSection />
      </div>
      <div className="parent-container">
        <TrainingSection graduateTrainingData={graduateTraining} />
      </div>
      <div className="parent-container">
        <InfoSection infoData={personalInfo}/>
      </div >
      <br /><br />
    </div>
  )
}

export default ProfilePage
