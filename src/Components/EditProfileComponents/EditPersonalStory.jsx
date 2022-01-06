import { useState } from 'react'
import PropTypes from 'prop-types'
import "../../css/EditPersonalStory.css"
import PersonalStoryModal from './PersonalStoryModal'



const EditPersonalStory = props => {
	const [showModal, setShowModal] = useState(false);
	const addDegree = clickEvent => {
		clickEvent.preventDefault()
		setShowModal(true);
	}

	const degrees = ['university', 'degree subject', 'degree level', 'grade', 'from', 'to', 'weight', 'priority', 'description'];
	const createTableHeaders = arr => {
		return arr.map(header => {
			return <th>{header}</th>
		})
	}
	return (
		<div className="container card borderClass">
			<h3 className="col-2 profile-padding">Personal Story</h3>
			<br /><br />
			<p className="col-5 table-title">Degrees:</p>

			<div>
				<table className="table table-striped">
					<button name="addDegree" onClick={addDegree} >Add</button>
					< PersonalStoryModal show={showModal} setShowModal={setShowModal} inputFieldHeaders={degrees} />
					<thead className="table-heading">

						<tr>
							{createTableHeaders(degrees)}

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
							<td>majored in metallurgy</td>
							<button>Edit</button>
							<button>Delete</button>
						</tr>
					</tbody>
				</table>
				<br /><br />
				<p className="col-5 table-title">School Qualifications</p>
				<table className="table table-striped">
					<thead className="table-heading">
						<tr>
							<th>School</th>
							<th>Exam Type</th>
							<th>Subject</th>
							<th>Grade</th>
							<th>Year</th>
							<th>Weight</th>
							<th>Priority</th>
							<th>Description</th>
							{/* <button onClick={addSchoolQualification} >Add</button> */}
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
							<button>Edit</button>
							<button>Delete</button>
						</tr>
					</tbody>
				</table>
				<br /><br />
				<p className="col-5 table-title">Work Experience / positions held</p>
				<table className="table table-striped">
					<thead className="table-heading">
						<tr>
							<th>Type</th>
							<th>Employer or other organization</th>
							<th>Position</th>
							<th>From</th>
							<th>To</th>
							<th>Weight</th>
							<th>Priority</th>
							<th>Description</th>
							{/* <button onClick={addWorkExperience} >Add</button> */}
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
							<button>Edit</button>
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
							<button>Edit</button>
							<button>Delete</button>
						</tr>

					</tbody>
				</table>
				<br /><br />
				<p className="col-5 table-title">Certificates and awards</p>
				<table className="table table-striped">
					<thead className="table-heading">
						<tr>
							<th>Type</th>
							<th>Issuer</th>
							<th>Award</th>
							<th>Grade</th>
							<th>Year</th>
							<th>Weight</th>
							<th>Priority</th>
							<th>Description</th>
							{/* <button onClick={addCertificatesAndAwards} >Add</button> */}
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
							<button>Edit</button>
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
							<button>Edit</button>
							<button>Delete</button>
						</tr>
					</tbody>
				</table>
				<br /><br />
				<p className="col-5 table-title">Portfolio</p>
				<table className="table table-striped">
					<thead className="table-heading">
						<tr>
							<th>Title</th>
							<th>URL</th>
							<th>Year</th>
							<th>Weight</th>
							<th>Priority</th>
							<th>Description</th>
							{/* <button onClick={addPortfolio} >Add</button> */}
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
							<button>Edit</button>
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
