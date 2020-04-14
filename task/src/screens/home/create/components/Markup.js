import React from "react";
import { Tab, Col, Nav, Row, Container } from 'react-bootstrap';
import View from '../../view/components/Markup'
import CreateUser from '../../view/components/CreateMarkup'

import './Markup.scss'
const Create = (props) =>{
    return (
      <Container>
		<div className="home">
			<Tab.Container id="left-tabs-example" defaultActiveKey="first" >
        <div className="left-bar">
       <Row >
         <Col md="3" className="title-row" >
         CREATIVE TIM
         </Col>
         <Col md="9" className="right-side">
        <Tab.Pane eventKey="table-list">
          <span>Table List</span>
          </Tab.Pane> 
         </Col>
       </Row>
        <Row className="list">
    <Col sm={3} className="list-items">
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="user-profile">User Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="table-list">Table List</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="fourth">Typography</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="icons">Icons</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="maps">Maps</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="notification">Notifications</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="support">RTL Support</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9} className="right-side">
      <Tab.Content >
        <Tab.Pane eventKey="user-profile">
			<CreateUser />
        </Tab.Pane>
        <Tab.Pane eventKey="table-list" className="right-side-content">
			<View/>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
  </div>
  
</Tab.Container>
		</div>
    </Container>
     )
}
export default Create;