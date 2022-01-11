import React from 'react'
import PropTypes from 'prop-types'

const ProfileInfo = ({ profileInfo }) => {

    //graduateUserData successfully passed as prop
    //profileInfo is equivalent to the graduate profile schema
    const formatProfileItems = profileInfo => {
        const profileInfoArray = [];
        const profileInfoKeys = Object.keys(profileInfo);
        for (let i = 0; i < profileInfoKeys.length; i++) {
            const key = profileInfoKeys[i];
            const value = profileInfo[profileInfoKeys[i]];
            profileInfoArray.push([key, value]);
        }
        return profileInfoArray;
    }

    const createProfileItems = profileInfoArray => {
        return profileInfoArray.map((currentArray, index) => {
            return <p key={index}>{currentArray[0]}:  {currentArray[1]}</p>
        })
    }

    return (
        <div>
            {createProfileItems(formatProfileItems(profileInfo))}
        </div>
    )
}

ProfileInfo.propTypes = {

}

export default ProfileInfo