import React from 'react'
import PropTypes from 'prop-types'
import "../../css/EditPersonalStory.css"

const EditPersonalStory = props => {
    return (
        <div className="container card borderClass">
            <h3 className="col-2">Personal Story</h3>
            <br/><br/>
            <p className="col-2">Degrees:</p>
            
        <div>
            <table className="table table-striped">
<thead>
	<tr>
		<th>University</th>
		<th>Degree Subject</th>
		<th>Degree Level</th>
		<th>Grade</th>
		<th>From</th>
		<th>To</th>
		<th>Weight</th>
		<th>Priority</th>
		<th>Description</th>
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
	</tr>
</tbody>
                </table>
                <br/><br/>
                <p className="col-2">School Qualifications</p>
                <table className="table table-striped">
<thead>
	<tr>
		<th>School</th>
		<th>Exam Type</th>
		<th>Subject</th>
		<th>Grade</th>
		<th>Year</th>
		<th>Weight</th>
		<th>Priority</th>
		<th>Description</th>
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
	</tr>
</tbody>
                </table>
                <br/><br/>
                <p className="col-2">Work Experience / positions held</p>
                <table className="table table-striped">
<thead>
	<tr>
		<th>Type</th>
		<th>Employer or other organization</th>
		<th>Position</th>
		<th>From</th>
		<th>To</th>
		<th>Weight</th>
		<th>Priority</th>
		<th>Description</th>
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
    </tr>
                        
</tbody>
                </table>
                <br/><br/>
                <p className="col-2">Certificates and awards</p>
                <table className="table table-striped">
<thead>
	<tr>
		<th>Type</th>
		<th>Issuer</th>
		<th>Award</th>
		<th>Grade</th>
		<th>Year</th>
		<th>Weight</th>
		<th>Priority</th>
		<th>Description</th>
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
	</tr>
</tbody>
                </table>
                <br/><br/>
                <p className="col-2">Portfolio</p>
                <table className="table table-striped">
<thead>
	<tr>
		<th>Title</th>
		<th>URL</th>
		<th>Year</th>
		<th>Weight</th>
		<th>Priority</th>
		<th>Description</th>
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
	</tr>
</tbody>
 </table>
<br/><br/>
</div>
        </div>
    )
}

EditPersonalStory.propTypes = {

}

export default EditPersonalStory
