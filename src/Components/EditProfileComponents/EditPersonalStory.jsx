import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import "../../css/EditPersonalStory.css"
import PersonalStoryModal from './PersonalStoryModal'

const EditPersonalStory = ({ graduateUserPersonalStory }) => {
	const [showDegree, setShowDegreeModal] = useState(false);
	const [showSchoolQuals, setShowSchoolQualsModal] = useState(false);
	const [showWorkExperience, setShowWorkExperienceModal] = useState(false);
	const [showCertificates, setShowCertificatesModal] = useState(false);
	const [showPortfolio, setShowPortfolioModal] = useState(false);
	const [data, setData] = useState('');
	const [editDataObject, setEditDataObject] = useState({
		degree: {},
		schoolQualifications: {},
		workExperience: {},
		certificatesAndAwards: {},
		portfolio: {}
	});

	useEffect(() => {
		const getData = async () => {
			setData(await graduateUserPersonalStory);
		}
		setTimeout(() => getData(), 500);
		getData();
	}, [graduateUserPersonalStory]);

	let editData = {
		degree: {},
		schoolQualifications: {},
		workExperience: {},
		certificatesAndAwards: {},
		portfolio: {}
	}
	const resetEditDataVariable = () => {
		editData = { degree: {}, schoolQualifications: {}, workExperience: {}, certificatesAndAwards: {}, portfolio: {} };
	}

	const addDegree = (clickEvent, rowKeyToEdit) => {
		clickEvent.preventDefault();
		resetEditDataVariable();
		if (clickEvent.target.name === "editDegree") {
			const rowToEdit = data.degree.find(o => o._id === rowKeyToEdit);
			editData.degree = rowToEdit;
			editData.degree.date.from = editData.degree.date.from.split("T")[0];
			editData.degree.date.to = editData.degree.date.to.split("T")[0];
			setEditDataObject(editData);
		}
		setShowDegreeModal(true);
	}
	const addSchoolQuals = (clickEvent, rowKeyToEdit) => {
		clickEvent.preventDefault();
		resetEditDataVariable();
		if (clickEvent.target.name === "editSchoolQuals") {
			const rowToEdit = data.schoolQualifications.find(o => o._id === rowKeyToEdit);
			editData.schoolQualifications = rowToEdit;
			setEditDataObject(editData);
		}
		setShowSchoolQualsModal(true);
	}
	const addWorkExperience = (clickEvent, rowKeyToEdit) => {
		clickEvent.preventDefault();
		resetEditDataVariable();
		if (clickEvent.target.name === "editWorkExperience") {
			const rowToEdit = data.workExperience.find(o => o._id === rowKeyToEdit);
			editData.workExperience = rowToEdit;
			setEditDataObject(editData);
		}
		setShowWorkExperienceModal(true);
	}
	const addCertificates = (clickEvent, rowKeyToEdit) => {
		clickEvent.preventDefault();
		resetEditDataVariable();
		if (clickEvent.target.name === "editCertificates") {
			const rowToEdit = data.certificatesAndAwards.find(o => o._id === rowKeyToEdit);
			editData.certificatesAndAwards = rowToEdit;
			setEditDataObject(editData);
		}
		setShowCertificatesModal(true);
	}
	const addPortfolio = (clickEvent, rowKeyToEdit) => {
		clickEvent.preventDefault();
		resetEditDataVariable();
		if (clickEvent.target.name === "editPortfolio") {
			const rowToEdit = data.portfolio.find(o => o._id === rowKeyToEdit);
			console.log(`rowToEdit Portfolio: ${JSON.stringify(rowToEdit)}`)
			editData.portfolio = rowToEdit;
			setEditDataObject(editData);
		}
		setShowPortfolioModal(true);
	}

	const degreesHeadings = ['University', 'Degree Subject', 'Degree Level', 'Grade', 'From', 'To', 'Weight', 'Priority', 'Description', ''];
	const schoolQualificationsHeadings = ['School', 'Exam Type', 'Subject', 'Grade', 'Year', 'Weight', 'Priority', 'Description', ''];
	const workExperienceAndPositionsHeadings = ['Type', 'Employer or Other Organisation', 'Position', 'From', 'To', 'Weight', 'Priority', 'Description', ''];
	const certificatesAndAwardsHeadings = ['Type', 'Issuer', 'Award', 'Grade', 'Year', 'Weight', 'Priority', 'Description', ''];
	const portfolioHeadings = ['Title', 'URL', 'Year', 'Weight', 'Priority', 'Description', ''];

	const createTableHeaders = arr => {
		return arr.map(header => {
			return <th key={header}>{header}</th>
		});
	};

	const renderEditAndDeleteButtons = (editName, addFunction, rowKey) => {
		return (
			<td>
				<div className="button-div">
					<button name={editName} onClick={event => {
						addFunction(event, rowKey);
					}} className="edit-button">Edit</button>
					<button className="delete-button">Delete</button>
				</div>
			</td>
		);
	};

	const renderDegreeTableData = arr => {
		return arr.map(degree => {
			return (
				<tr key={degree._id}>
					<td>{degree.university}</td>
					<td>{degree.subject}</td>
					<td>{degree.level}</td>
					<td>{degree.grade}</td>
					<td>{degree.date.from.split('T')[0]}</td>
					<td>{degree.date.to.split('T')[0]}</td>
					<td>{degree.weight}</td>
					<td>{degree.priority}</td>
					<td>{degree.description}</td>
					{renderEditAndDeleteButtons("editDegree", addDegree, degree._id)}
				</tr>
			);
		});
	}

	const renderSchoolQualsTableData = arr => {
		return arr.map(schoolQualifications => {
			return (
				<tr key={schoolQualifications._id}>
					<td>{schoolQualifications.school}</td>
					<td>{schoolQualifications.examType}</td>
					<td>{schoolQualifications.subject}</td>
					<td>{schoolQualifications.grade}</td>
					<td>{schoolQualifications.year.from.split('-')[0]}</td>
					<td>{schoolQualifications.weight}</td>
					<td>{schoolQualifications.priority}</td>
					<td>{schoolQualifications.description}</td>
					{renderEditAndDeleteButtons("editSchoolQuals", addSchoolQuals, schoolQualifications._id)}
				</tr>
			);
		});
	}

	const renderWorkExperienceTableData = arr => {
		return arr.map(workExperience => {
			return (
				<tr key={workExperience._id}>
					<td>{workExperience.type}</td>
					<td>{workExperience.employerOrOtherOrganisation}</td>
					<td>{workExperience.position}</td>
					<td>{workExperience.date.from.split('-')[0]}</td>
					<td>{workExperience.date.to.split('-')[0]}</td>
					<td>{workExperience.weight}</td>
					<td>{workExperience.priority}</td>
					<td>{workExperience.description}</td>
					{renderEditAndDeleteButtons("editWorkExperience", addWorkExperience, workExperience._id)}
				</tr>
			);
		});
	}

	const renderCertificatesTableData = arr => {
		return arr.map(certificatesAndAwards => {
			return (
				<tr key={certificatesAndAwards._id}>
					<td>{certificatesAndAwards.type}</td>
					<td>{certificatesAndAwards.issuer}</td>
					<td>{certificatesAndAwards.award}</td>
					<td>{certificatesAndAwards.grade}</td>
					<td>{certificatesAndAwards.year.split("-")[0]}</td>
					<td>{certificatesAndAwards.weight}</td>
					<td>{certificatesAndAwards.priority}</td>
					<td>{certificatesAndAwards.description}</td>
					{renderEditAndDeleteButtons("editCertificates", addCertificates, certificatesAndAwards._id)}
				</tr>
			);
		});
	}

	const renderPortfolioTableData = arr => {
		return arr.map(portfolio => {
			return (
				<tr key={portfolio._id}>
					<td>{portfolio.title}</td>
					<td>{portfolio.url}</td>
					<td>{portfolio.year.split('-')[0]}</td>
					<td>{portfolio.weight}</td>
					<td>{portfolio.priority}</td>
					<td>{portfolio.description}</td>
					{renderEditAndDeleteButtons("editPortfolio", addPortfolio, portfolio._id)}
				</tr>
			);
		});
	}

	return (
		<div className="container card borderClass editCard">
			<h3 className="col-2 profile-padding">Personal Story</h3>
			<br /><br />
			<div>
				<p className="col-5 table-title">Degrees:</p>
				<button name="addDegree" onClick={addDegree} className="add-button">Add</button>
				<PersonalStoryModal show={showDegree} setShowModal={setShowDegreeModal} inputFieldHeaders={degreesHeadings} storyType="Degrees" data={editDataObject} />
				<table className="table table-striped">
					<thead className="table-heading">
						<tr>
							{createTableHeaders(degreesHeadings)}
						</tr>
					</thead>
					<tbody>
						{graduateUserPersonalStory && renderDegreeTableData(graduateUserPersonalStory.degree)}
					</tbody>
				</table>
				<br /><br />
				<p className="col-5 table-title">School Qualifications</p>
				<button name="addSchoolQuals" onClick={addSchoolQuals} className="add-button">Add</button>
				< PersonalStoryModal show={showSchoolQuals} setShowModal={setShowSchoolQualsModal} inputFieldHeaders={schoolQualificationsHeadings} storyType="School Qualifications" data={editDataObject} />
				<table className="table table-striped">
					<thead className="table-heading">
						<tr>
							{createTableHeaders(schoolQualificationsHeadings)}
						</tr>
					</thead>
					<tbody>
						{graduateUserPersonalStory && renderSchoolQualsTableData(graduateUserPersonalStory.schoolQualifications)}
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
						{graduateUserPersonalStory && renderWorkExperienceTableData(graduateUserPersonalStory.workExperience)}
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
						{graduateUserPersonalStory && renderCertificatesTableData(graduateUserPersonalStory.certificatesAndAwards)}
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
						{graduateUserPersonalStory && renderPortfolioTableData(graduateUserPersonalStory.portfolio)}
					</tbody>
				</table>
				<br /><br />
			</div>
		</div>
	)
}

// EditPersonalStory.propTypes = {
// 	graduateUserPersonalStory: PropTypes.shape({
// 		degree: PropTypes.arrayOf(
// 			PropTypes.shape({
// 				university: PropTypes.string,
// 				subject: PropTypes.string,
// 				level: PropTypes.string,
// 				grade: PropTypes.string,
// 				date: PropTypes.shape({
// 					from: PropTypes.instanceOf(Date),
// 					to: PropTypes.instanceOf(Date)
// 				}),
// 				weight: PropTypes.string,
// 				priority: PropTypes.number,
// 				description: PropTypes.string
// 			})
// 		),
// 		schoolQualifications: PropTypes.arrayOf(
// 			PropTypes.shape({
// 				school: PropTypes.string,
// 				examType: PropTypes.string,
// 				subject: PropTypes.string,
// 				grade: PropTypes.string,
// 				year: PropTypes.shape({
// 					from: PropTypes.instanceOf(Date),
// 					to: PropTypes.instanceOf(Date)
// 				}),
// 				weight: PropTypes.string,
// 				priority: PropTypes.number,
// 				description: PropTypes.string
// 			})
// 		),
// 		workExperience: PropTypes.arrayOf(
// 			PropTypes.shape({
// 				type: PropTypes.string,
// 				employerOrOtherOrganisation: PropTypes.string,
// 				position: PropTypes.string,
// 				date: PropTypes.shape({
// 					from: PropTypes.instanceOf(Date),
// 					to: PropTypes.instanceOf(Date)
// 				}),
// 				weight: PropTypes.string,
// 				priority: PropTypes.number,
// 				description: PropTypes.string
// 			})
// 		),
// 		certificatesAndAwards: PropTypes.arrayOf(
// 			PropTypes.shape({
// 				type: PropTypes.string,
// 				issuer: PropTypes.string,
// 				award: PropTypes.string,
// 				grade: PropTypes.string,
// 				year: PropTypes.instanceOf(Date),
// 				weight: PropTypes.string,
// 				priority: PropTypes.number,
// 				description: PropTypes.string
// 			})
// 		),
// 		portfolio: PropTypes.arrayOf(
// 			PropTypes.shape({
// 				title: PropTypes.string,
// 				url: PropTypes.string,
// 				year: PropTypes.instanceOf(Date),
// 				weight: PropTypes.string,
// 				priority: PropTypes.number,
// 				description: PropTypes.string
// 			})
// 		)
// 	})
// };

export default EditPersonalStory
