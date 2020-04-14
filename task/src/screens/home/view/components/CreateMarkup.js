import React from "react";
import { Tab, Col, Nav, Row, Card , Button} from 'react-bootstrap';

import './CreateMarkup.scss'
const CreateUser = (props) =>{
    return (
		<div className="right-container">
			
			<Card className="container fluid">
			<Card className="top-card">
				<h5>Edit Profile</h5>
				<p>Complete your profile</p>
			</Card>

            <form>
		<Row >
        <Col md="5">
        <input type="text" class="form-control" placeholder="Company" disabled/>
        </Col>
        <Col md="3">
        <input type="text" class="form-control" placeholder="Username"/>
        
        </Col>
        <Col md="4">
        <input type="email" class="form-control" placeholder="Email Address"/>
            
        </Col>
            </Row>
            <Row className="alingn">
            <Col md="6">

        <input type="text" class="form-control" placeholder="First Name"/>
            </Col>
            <Col md="6">

        <input type="text" class="form-control" placeholder="Last Name"/>
            </Col>
                
            </Row>
            <Row className="alingn">
            <Col md="5">
        <input type="text" class="form-control" placeholder="City"/>
        </Col>
        <Col md="3">
        <input type="text" class="form-control" placeholder="Country"/>
        
        </Col>
        <Col md="4">
        <input type="number" class="form-control" placeholder="Postal Code"/>
            
        </Col>
            </Row>
            <Row>
                <Col className="about">
                About me
                </Col>
            </Row>
            <Row className="alingn">
            <textarea defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo." class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </Row>
            <Row className="button-container">
                <Button className="button">
                    Update Profile
                </Button>
            </Row>
            </form>
			</Card>
		</div>
     )
}
export default CreateUser;