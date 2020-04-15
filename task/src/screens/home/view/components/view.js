import React from "react";
import { Tab, Col, Nav, Row, Card } from 'react-bootstrap';

import './view.scss'
const View = (props) => {
	const { userList } = props;
	return (
		<div className="right-container">

			<Card className="container fluid">
				<Card className="top-card">
					<h5>Simple table</h5>
					<p>Here is subtitle for this table</p>
				</Card>
				<table class="table table-hover">
					<thead>
						<tr>
							<td scope="col">Name</td>
							<td scope="col">Country</td>
							<td scope="col">City</td>
							<td scope="col">Salary</td>
						</tr>
					</thead>
					<tbody>
						{userList ? userList.map(user => {
							return (
								<tr>
									<th>scope="row">{`${user.first_name} ${user.last_name}`}</th>
									<td>{user.country}</td>
									<td>{user.city}</td>
									<td></td>
								</tr>)
						}) : ''}
					</tbody>
				</table>
			</Card>
		</div>
	)
}
export default View;