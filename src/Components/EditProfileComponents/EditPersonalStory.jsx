import { useState } from 'react'
import PropTypes from 'prop-types'
import "../../css/EditPersonalStory.css"
import PersonalStoryModal from './PersonalStoryModal'

const EditPersonalStory = props => {
	const [showDegree, setShowDegreeModal] = useState(false);
	const [showSchoolQuals, setShowSchoolQualsModal] = useState(false);
	const [showWorkExperience, setShowWorkExperienceModal] = useState(false);
	const [showCertificates, setShowCertificatesModal] = useState(false);
	const [showPortfolio, setShowPortfolioModal] = useState(false);
	const [data, setData] = useState('');

	let editData = {
		degree: {},
		schoolQualifications: {},
		workExperience: {},
		certificatesAndAwards: {},
		portfolio: {}
	}

	const addDegree = clickEvent => {
		clickEvent.preventDefault()
		if (clickEvent.target.name === "editDegree") {
			editData.degree = {
				university: "Southampton University", subject: "Chemistry", level: "Bachelors", grade: "2:1", from: "2018-09-01", to: "2021-07-01", weight: "L", priority: "10", description: "majored in science"
			};
			setData(editData);
		}
		setShowDegreeModal(true);
	}
	const addSchoolQuals = clickEvent => {
		clickEvent.preventDefault();
		if (clickEvent.target.name === "editSchoolQuals") {
			editData.schoolQualifications = {
				school: `high school`, examType: `GCSE`, subject: `IT`, grade: `Dist`, year: "2015-01-01", weight: `M`, priority: "1", description: `high school qualification`
			};
			setData(editData);
		}
		setShowSchoolQualsModal(true);
	}
	const addWorkExperience = clickEvent => {
		clickEvent.preventDefault();
		if (clickEvent.target.name === "editWorkExperience") {
			editData.workExperience = {
				type: `Experience`, employerOrOtherOrganisation: `Fred's Ice Cream`, position: `Ice Cream Maker`, from: `2012-01-01`, to: `2013-01-01`, weight: `M`, priority: "1", description: ``
			};
			setData(editData);
		}
		setShowWorkExperienceModal(true);
	}
	const addCertificates = clickEvent => {
		clickEvent.preventDefault();
		if (clickEvent.target.name === "editCertificates") {
			editData.certificatesAndAwards = {
				type: `Cert`, issuer: `Oracle`, award: `Oracle-Java SE`, grade: `Distinction`, year: `2021-01-01`, weight: `L`, priority: "7", description: ``
			};
			setData(editData);
		}
		setShowCertificatesModal(true);
	}
	const addPortfolio = clickEvent => {
		clickEvent.preventDefault();
		if (clickEvent.target.name === "editPortfolio") {
			editData.portfolio = {
				title: `How to identify Opportunities`, url: `https://mysite/howt`, year: `2020-01-01`, weight: `L`, priority: "9", description: `A motivational talk I delivered on how to identify opportunities`
			};
			setData(editData);
		}
		setShowPortfolioModal(true);
	}

	const degreesHeadings = ['University', 'Degree Subject', 'Degree Level', 'Grade', 'From', 'To', 'Weight', 'Priority', 'Description'];
	const schoolQualificationsHeadings = ['School', 'Exam Type', 'Subject', 'Grade', 'Year', 'Weight', 'Priority', 'Description'];
	const workExperienceAndPositionsHeadings = ['Type', 'Employer or Other Organisation', 'Position', 'From', 'To', 'Weight', 'Priority', 'Description'];
	const certificatesAndAwardsHeadings = ['Type', 'Issuer', 'Award', 'Grade', 'Year', 'Weight', 'Priority', 'Description'];
	const portfolioHeadings = ['Title', 'URL', 'Year', 'Weight', 'Priority', 'Description'];

	const createTableHeaders = arr => {
		return arr.map(header => {
			return <th key={header}>{header}</th>
		});
	};

	return (
		<div className="container card borderClass">
			<h3 className="col-2 profile-padding">Personal Story</h3>
			<br /><br />
			<div>
				<p className="col-5 table-title">Degrees:</p>
				<button name="addDegree" onClick={addDegree} className="add-button">Add</button>
				< PersonalStoryModal show={showDegree} setShowModal={setShowDegreeModal} inputFieldHeaders={degreesHeadings} storyType="Degrees" data={data} />
				<table className="table table-striped">
					<thead className="table-heading">

						<tr>
							{createTableHeaders(degreesHeadings)}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Southampton University</td>
							<td>Chemistry</td>
							<td>bachelors</td>
							<td>2:1</td>
							<td>2018-09-01</td>
							<td>2021-07-01</td>
							<td>L</td>
							<td>10</td>
							<td>majored in science</td>
							<button name="editDegree" onClick={addDegree} className="edit-button">Edit</button>
							<button>Delete</button>
						</tr>
					</tbody>
				</table>
				<br /><br />
				<p className="col-5 table-title">School Qualifications</p>
				<button name="addSchoolQuals" onClick={addSchoolQuals} className="add-button">Add</button>
				< PersonalStoryModal show={showSchoolQuals} setShowModal={setShowSchoolQualsModal} inputFieldHeaders={schoolQualificationsHeadings} storyType="School Qualifications" data={data} />
				<table className="table table-striped">
					<thead className="table-heading">
						<tr>
							{createTableHeaders(schoolQualificationsHeadings)}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>St Winifred's</td>
							<td>a-level</td>
							<td>Maths</td>
							<td>A</td>
							<td>2015</td>
							<td>M</td>
							<td>5</td>
							<td></td>
							<button name="editSchoolQuals" onClick={addSchoolQuals} className="edit-button">Edit</button>
							<button>Delete</button>
						</tr>
					</tbody>
				</table>
				<br /><br />
				<p className="col-5 table-title">Work Experience / positions held</p>
				<button name="addWorkExperience" onClick={addWorkExperience} className="add-button">Add</button>
				< PersonalStoryModal show={showWorkExperience} setShowModal={setShowWorkExperienceModal} inputFieldHeaders={workExperienceAndPositionsHeadings} storyType="Work Experience" data={data} />
				<table className="table table-striped">
					<thead className="table-heading">
						<tr>
							{createTableHeaders(workExperienceAndPositionsHeadings)}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Experience</td>
							<td>Fred's Ice Cream</td>
							<td>Ice cream maker</td>
							<td>2021</td>
							<td>2013</td>
							<td>m</td>
							<td>0</td>
							<td></td>
							<button name="editWorkExperience" onClick={addWorkExperience} className="edit-button">Edit</button>
							<button>Delete</button>
						</tr>
						<tr>
							<td>Position</td>
							<td>Southampton Uni Debate Club</td>
							<td>Secretary</td>
							<td>2020</td>
							<td>2021</td>
							<td>l</td>
							<td>6</td>
							<td>public speaking is one of my skills</td>
							<button name="editWorkExperience" onClick={addWorkExperience} className="edit-button">Edit</button>
							<button>Delete</button>
						</tr>

					</tbody>
				</table>
				<br /><br />
				<p className="col-5 table-title">Certificates and awards</p>
				<button name="addCertificates" onClick={addCertificates} className="add-button">Add</button>
				< PersonalStoryModal show={showCertificates} setShowModal={setShowCertificatesModal} inputFieldHeaders={certificatesAndAwardsHeadings} storyType="Certificates" data={data} />
				<table className="table table-striped">
					<thead className="table-heading">
						<tr>
							{createTableHeaders(certificatesAndAwardsHeadings)}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Cert</td>
							<td>Oracle</td>
							<td>Oracle-Java SE</td>
							<td>Distinction</td>
							<td>2021</td>
							<td>l</td>
							<td>7</td>
							<td></td>
							<button name="editCertificates" onClick={addCertificates} className="edit-button">Edit</button>
							<button>Delete</button>
						</tr>
						<tr>
							<td>Award</td>
							<td>Southampton Uni Debate Club</td>
							<td>MVP</td>
							<td></td>
							<td>2021</td>
							<td>M</td>
							<td>4</td>
							<td></td>
							<button name="editCertificates" onClick={addCertificates} className="edit-button">Edit</button>
							<button>Delete</button>
						</tr>
					</tbody>
				</table>
				<br /><br />
				<p className="col-5 table-title">Portfolio</p>
				<button name="addPortfolio" onClick={addPortfolio} className="add-button">Add</button>
				< PersonalStoryModal show={showPortfolio} setShowModal={setShowPortfolioModal} inputFieldHeaders={portfolioHeadings} storyType="Portfolio" data={data} />
				<table className="table table-striped">
					<thead className="table-heading">
						<tr>
							{createTableHeaders(portfolioHeadings)}
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>How to Identify Opportunities</td>
							<td>https://mysite/howt</td>
							<td>2020</td>
							<td>L</td>
							<td>9</td>
							<td>A motivational talk I delivered on how to identify opportunities</td>
							<button name="editPortfolio" onClick={addPortfolio} className="edit-button">Edit</button>
							<button>Delete</button>
						</tr>
					</tbody>
				</table>
				<br /><br />
			</div>
		</div>
	)
}

EditPersonalStory.propTypes = {

}

export default EditPersonalStory
