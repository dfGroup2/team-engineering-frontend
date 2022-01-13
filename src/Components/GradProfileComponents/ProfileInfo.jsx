import React from 'react'
import PropTypes from 'prop-types'

const ProfileInfo = ({ profileInfo, capitaliseFirstLetter }) => {

    //graduateUserData successfully passed as prop
    //profileInfo is equivalent to the graduate profile schema
    const formatProfileItems = profileInfo => {
        // [[key, value], [key, value]]
        // profileInfoArray contains an array that looks like: 
        // [[firstName, defaultFirstName], [lastName, defaultLastName], ...]
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
        // convert string into an array of characters
        // then find the first capital letter in the array
        // insert a space character before the capital letter
        // join the array back into a string
        const characterArr = graduateProfileKey.split("");
        for (let i = 0; i < characterArr.length; i++) {
            if (characterArr[i] === characterArr[i].toUpperCase()) {
                characterArr.splice(i, 0, " ");
                break;
            }
        }
        const formattedKey = characterArr.join("");
        //console.log(formattedKey);
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