import React from 'react'
import PropTypes from 'prop-types'
import { testGraduateUser } from '../../tests/testData/sampleGraduateUser';

const InfoSection = ({ infoData }) => {
    const { badges, scores } = infoData

    // const createBadges = badgesArray => {
    //     return badgesArray.map(currentBadge => {
    //         return <p className="borderClass">{currentBadge}</p>
    //     })
    // }
    // //badges denotes an array of strings
    // const createColumns = badgesArray => {
    //     const badgeColumnDivArray = [];
    //     const numOfColumns = Math.ceil(badgesArray.length / 2)
    //     for (let i = 0; i < numOfColumns; i++) {
    //         badgeColumnDivArray.push(<div className="col-2"></div>)
    //     }
    //     //[[badge1,badge2],[badge3,badge4]]
    //     //[{key: value}{}]
    //     return badgeColumnDivArray;
    // }

    const formatBadgesInColumns = badgesArray => {
        const badgeColumnDivArrayPopulated = [];
        const isEven = badgesArray.length % 2 == 0;

        //when there is an even number of badges run the following for loop 
        for (let i = 0; i < badgesArray.length - 1; i += 2) {
            const badge1 = badgesArray[i];
            const badge2 = badgesArray[i + 1];
            badgeColumnDivArrayPopulated.push(<div className="col-2">
                <p className="borderClass">
                    {badge1}
                </p>
                <p className="borderClass">
                    {badge2}
                </p>
            </div>)
        }
        //only run this line if the badges array is odd
        if (!isEven) {
            badgeColumnDivArrayPopulated.push(<div className="col-2">
                <p className="borderClass">{badgesArray[badgesArray.length - 1]}</p>
            </div>)
        }
        return badgeColumnDivArrayPopulated;
    }
    return (
        <div className="container card borderClass editCard">
            <h3 className="col-3 fw-bold">Your information </h3>
            <div className="row">
                <div className="col-1">
                    <p>Badges:</p>
                </div>
                {formatBadgesInColumns(badges)}
                <div className="col-1">
                    <p>Scores:</p>
                </div>
                <div className="col-5 borderClass overflow-auto " style={{ height: "70px" }}
                >
                    <p>Aptitude:<span>{scores[0]}</span>%</p>
                    <p>Java:<span>{scores[1]}</span>%</p>
                    <p>JavaScript:<span>{scores[2]}</span>%</p>
                    <p>CSS:<span>{scores[3]}</span>%</p>
                </div>
            </div>
        </div>
    )
}

InfoSection.propTypes = {

}

export default InfoSection
