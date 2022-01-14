import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import "../../css/EditPersonalStory.css"
import PersonalStoryModal from './PersonalStoryModal'
import axios from 'axios';

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
	const [fullDataObject, setFullDataObject] = useState(``);

	//not the best way to do this at all but ran out of time
	const getGraduateUserDataById = async () => {
		try {
			const currentGraduateUserDataId = JSON.parse(localStorage.getItem('user')).graduateUserData;
			const webToken = JSON.parse(localStorage.getItem('user')).accessToken;
			const res = await axios
				.get(`${process.env.REACT_APP_DFXTRAURL}/api/content/graduateUsers/${currentGraduateUserDataId}`, { headers: { "x-access-token": webToken } })
			return objectIsEmpty(res.data) ? res.data : new Error(`There was an error retrieving graduate data`);
		}
		catch (e) {
			return {};
		}
	}
	const objectIsEmpty = userData => {
		return Object.keys(userData).length > 0
	}

	useEffect(() => {
		const getData = async () => {
			setData(await graduateUserPersonalStory);
			setFullDataObject(await getGraduateUserDataById());
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
		setEditDataObject(editData);
	}

	const addDegree = (clickEvent, rowKeyToEdit) => {
		clickEvent.preventDefault();
		resetEditDataVariable();
		if (clickEvent.target.name === "editDegree") {
			editData.degree = data.degree.find(o => o._id === rowKeyToEdit);
			editData.degree.date.from = splitDateData(editData.degree.date.from, "T");
			editData.degree.date.to = splitDateData(editData.degree.date.to, "T");
			setEditDataObject(editData);
		}
		setShowDegreeModal(true);
	}

	const deleteData = (clickEvent, rowKey) => {
		clickEvent.preventDefault();
		let tempData = data;

		switch (clickEvent.target.name) {
			case "editDegree":
				const indexOfRow = tempData.degree.findIndex(o => o._id === rowKey);
				tempData.degree.splice(indexOfRow, 1);
				break;
			case "editSchoolQuals":
				const indexOfRow2 = tempData.schoolQualifications.findIndex(o => o._id === rowKey);
				tempData.schoolQualifications.splice(indexOfRow2, 1);
				break;
			case "editCertificates":
				const indexOfRow3 = tempData.certificatesAndAwards.findIndex(o => o._id === rowKey);
				tempData.certificatesAndAwards.splice(indexOfRow3, 1);
				break;
			case "editWorkExperience":
				const indexOfRow4 = tempData.workExperience.findIndex(o => o._id === rowKey);
				tempData.workExperience.splice(indexOfRow4, 1);
				break;
			case "editPortfolio":
				const indexOfRow5 = tempData.portfolio.findIndex(o => o._id === rowKey);
				tempData.portfolio.splice(indexOfRow5, 1);
				break;
			default:
				console.log(`No data to delete `);
				break;
		}
		putRequestToDeleteItem(tempData);
	}

	const putRequestToDeleteItem = async (updatedData) => {
		let tempFullDO = fullDataObject;
		tempFullDO.personalStory = updatedData;
		const currentGraduateUserDataId = JSON.parse(localStorage.getItem('user')).graduateUserData;
		const webToken = JSON.parse(localStorage.getItem('user')).accessToken;
		const res = await axios.put(`${process.env.REACT_APP_DFXTRAURL}/api/content/graduateUsers/${currentGraduateUserDataId}`, tempFullDO, { headers: { "x-access-token": webToken } });
		window.location.reload(false);
	}

	const addSchoolQuals = (clickEvent, rowKeyToEdit) => {
		clickEvent.preventDefault();
		resetEditDataVariable();
		if (clickEvent.target.name === "editSchoolQuals") {
			editData.schoolQualifications = data.schoolQualifications.find(o => o._id === rowKeyToEdit);
			setEditDataObject(editData);
		}
		setShowSchoolQualsModal(true);
	}
	const addWorkExperience = (clickEvent, rowKeyToEdit) => {
		clickEvent.preventDefault();
		resetEditDataVariable();
		if (clickEvent.target.name === "editWorkExperience") {
			editData.workExperience = data.workExperience.find(o => o._id === rowKeyToEdit);
			setEditDataObject(editData);
		}
		setShowWorkExperienceModal(true);
	}
	const addCertificates = (clickEvent, rowKeyToEdit) => {
		clickEvent.preventDefault();
		resetEditDataVariable();
		if (clickEvent.target.name === "editCertificates") {
			editData.certificatesAndAwards = data.certificatesAndAwards.find(o => o._id === rowKeyToEdit);
			setEditDataObject(editData);
		}
		setShowCertificatesModal(true);
	}
	const addPortfolio = (clickEvent, rowKeyToEdit) => {
		clickEvent.preventDefault();
		resetEditDataVariable();
		if (clickEvent.target.name === "editPortfolio") {
			editData.portfolio = data.portfolio.find(o => o._id === rowKeyToEdit);
			setEditDataObject(editData);
		}
		setShowPortfolioModal(true);
	}

	const degreesHeadings = ['University', 'Degree Subject', 'Degree Level', 'Grade', 'From', 'To', 'Weight', 'Priority', 'Description', ''];
	const schoolQualificationsHeadings = ['School', 'Exam Type', 'Subject', 'Grade', 'From', 'To', 'Weight', 'Priority', 'Description', ''];
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
					<button className="delete-button" name={editName} onClick={event => {
						deleteData(event, rowKey);
					}}>Delete</button>
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
					<td>{splitDateData(degree.date.from, "T")}</td>
					<td>{splitDateData(degree.date.to, "T")}</td>
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
					<td>{splitDateData(schoolQualifications.year.from, "T")}</td>
					<td>{splitDateData(schoolQualifications.year.to, "T")}</td>
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
					<td>{workExperience.employerOrOtherOrganization}</td>
					<td>{workExperience.position}</td>
					<td>{splitDateData(workExperience.date.from, "-")}</td>
					<td>{splitDateData(workExperience.date.to, "-")}</td>
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
					<td>{splitDateData(certificatesAndAwards.year, "-")}</td>
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
					<td>{splitDateData(portfolio.year, "-")}</td>
					<td>{portfolio.weight}</td>
					<td>{portfolio.priority}</td>
					<td>{portfolio.description}</td>
					{renderEditAndDeleteButtons("editPortfolio", addPortfolio, portfolio._id)}
				</tr>
			);
		});
	}

	const splitDateData = (dateValue, splitDecider) => {
		return dateValue.split(splitDecider)[0];
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
				< PersonalStoryModal show={showWorkExperience} setShowModal={setShowWorkExperienceModal} inputFieldHeaders={workExperienceAndPositionsHeadings} storyType="Work Experience" data={editDataObject} />
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
				< PersonalStoryModal show={showCertificates} setShowModal={setShowCertificatesModal} inputFieldHeaders={certificatesAndAwardsHeadings} storyType="Certificates" data={editDataObject} />
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
				< PersonalStoryModal show={showPortfolio} setShowModal={setShowPortfolioModal} inputFieldHeaders={portfolioHeadings} storyType="Portfolio" data={editDataObject} />
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
// 				employerOrOtherOrganization: PropTypes.string,
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
