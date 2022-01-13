import React from 'react'
import PropTypes from 'prop-types'

const InfoSection = ({ infoData }) => {
    const { badges, scores } = infoData

    const formatBadgesInColumns = badgesArray => {
        const badgeColumnDivArrayPopulated = [];
        const isEven = badgesArray.length % 2 == 0;

        //when there is an even number of badges run the following for loop 
        for (let i = 0; i < badgesArray.length - 1; i += 2) {
            const badge1 = badgesArray[i];
            const badge2 = badgesArray[i + 1];
            badgeColumnDivArrayPopulated.push(<div className="col-2">
                <p className="borderClass shadow p-3 mb-4 bg-body rounded">
                    {badge1}
                </p>
                <p className="borderClass shadow p-3 mb-4 bg-body rounded">
                    {badge2}
                </p>
            </div>)
        }
        //only run this line if the badges array is odd
        if (!isEven) {
            badgeColumnDivArrayPopulated.push(<div className="col-2">
                <p className="borderClass shadow p-3 mb-4 bg-body rounded">{badgesArray[badgesArray.length - 1]}</p>
            </div>)
        }
        return badgeColumnDivArrayPopulated;
    }
    return (
        <div className="container card borderClass editCard">
            <h3 className="col-3 fw-bold mt-3">Your information </h3>
            <div className="row mt-3">
                <div className="col-1">
                    <p>Badges:</p>
                </div>
                {formatBadgesInColumns(badges)}
                <div className="col-1">
                    <p>Scores:</p>
                </div>
                <div className="col-5 borderClass overflow-auto shadow-lg" style={{ height: "140px" }}
                >
                    <p>Aptitude: <span>{scores[0]}</span>%</p>
                    <p>Java: <span>{scores[1]}</span>%</p>
                    <p>JavaScript: <span>{scores[2]}</span>%</p>
                    <p>CSS: <span>{scores[3]}</span>%</p>
                </div>
            </div>
        </div>
    )
}

InfoSection.propTypes = {

}

export default InfoSection
