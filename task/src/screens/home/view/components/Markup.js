import React from "react";
import { Tab, Col, Nav, Row, Card } from 'react-bootstrap';

import './Markup.scss'
const View = (props) =>{
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
				<tr>
				<th scope="row">1</th>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
				</tr>
				<tr>
				<th scope="row">2</th>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
				</tr>
				<tr>
				<th scope="row">3</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
				</tr>
				<tr>
				<th scope="row">3</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
				</tr>
				<tr>
				<th scope="row">3</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
				</tr>
				<tr>
				<th scope="row">3</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
				</tr>
				<tr>
				<th scope="row">3</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
				</tr>
				<tr>
				<th scope="row">3</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
				</tr>
				<tr>
				<th scope="row">3</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
				</tr>
			</tbody>
			</table>
			</Card>
		</div>
     )
}
export default View;