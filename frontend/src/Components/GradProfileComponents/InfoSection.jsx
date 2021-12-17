import React from 'react'
import PropTypes from 'prop-types'

const InfoSection = props => {
    return (
        <div className="container card borderClass">
            <h3 className="col-3">Your information </h3>
            <div className="row">
                <div className="col-1">
                    <p>Badges:</p>
                </div>
                <div className="col-2">
                    <p className="borderClass">Badge A <br />
                        xxxxx xxx x</p>
                    <p className=" borderClass">Badge A <br />
                        xxxxx xxx x</p>
                </div>
                <div className="col-2">
                    <p className=" borderClass">Badge A <br />
                        xxxxx xxx x</p>
                    <p className="borderClass">Badge A <br />
                        xxxxx xxx x</p>
                </div>
                <div className="col-1">
                    <p>Scores:</p>
                </div>
                <div className="col-4 borderClass overflow-auto " style={{ height: "70px" }}
                >
                    <p>Aptitude:93%</p>
                    <p>Java:87</p>
                </div>
                <p className="col-2">Video link</p>
            </div>
        </div>
    )
}

InfoSection.propTypes = {

}

export default InfoSection
