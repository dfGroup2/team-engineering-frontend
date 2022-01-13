import React from 'react'
import PropTypes from 'prop-types'

const ProfileInfo = ({ profileInfo, capitaliseFirstLetter }) => {

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
            return (
                <p className="titles" key={index}>
                    {capitaliseFirstLetter(formatGraduateProfileKey(currentArray[0]))}: <span className=" your-profile-titles">{currentArray[1]}
                    </span>
                </p>
            )
        })
    }

    const formatGraduateProfileKey = graduateProfileKey => {
        const characterArr = graduateProfileKey.split("");
        for (let i = 0; i < characterArr.length; i++) {
            if (characterArr[i] === characterArr[i].toUpperCase()) {
                characterArr.splice(i, 0, " ");
                break;
            }
        }
        const formattedKey = characterArr.join("");
        return formattedKey;
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