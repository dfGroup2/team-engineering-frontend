import React from 'react'
import ProfileSection from './ProfileSection'
import InfoSection from './InfoSection'
import TrainingSection from './TrainingSection'

const ProfilePage = props => {
  return (
    <div>
      <div className="parent-container">
        <ProfileSection />
      </div>
      <div className="parent-container">
        <TrainingSection />
      </div>
      <div className="parent-container">
        <InfoSection />
      </div >
      <br /><br />
    </div>
  )
}

export default ProfilePage
