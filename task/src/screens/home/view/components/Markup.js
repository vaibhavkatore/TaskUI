import React from "react";
import { Tab, Col, Nav, Row, Container } from 'react-bootstrap';
import View from '../components/view'
import CreateUser from './CreateMarkup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Markup.scss'
const Create = (props) => {
  const { onChangetext, onCreate } = props;
  return (
    <div className="home">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
        <div className="left-bar">
          <Row >
            <Col md="3" className="title-row" >
              <Row>
                <Col md="3" className="icons">
                  <FontAwesomeIcon className="interview-icon" icon={['fas', 'atom']} />
                </Col>
                <Col md="9" className="title">
                  CREATIVE TIM
         </Col>
              </Row>
            </Col>
            <Col md="9" className="right-side">
              <Tab.Pane eventKey="table-list">
                <Row>
                  <Col md="7">
                    <span>Table List</span>
                  </Col>
                  <Col md="4">
                    <input type="text" class="form-control search" placeholder="Search" />
                  </Col>
                </Row>
              </Tab.Pane>
            </Col>
          </Row>
          <Row className="list">
            <Col sm={3} className="list-items">
              <Nav variant="pills" className="flex-column" defaultActiveKey="user-profile">
                <Nav.Item>
                  <Nav.Link eventKey="dashboard"><FontAwesomeIcon className="icon" className="icon" icon={['fas', 'th-large']} /><span> Dashboard</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="user-profile"><FontAwesomeIcon className="icon" icon={['fas', 'user']} /><span>User Profile</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="table-list"><FontAwesomeIcon className="icon" icon={['fas', 'clipboard']} /><span>Table List</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth"><FontAwesomeIcon className="icon" icon={['fas', 'clone']} /><span>Typography</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="icons"><FontAwesomeIcon className="icon" icon={['fas', 'shapes']} /><span>Icons</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="maps"><FontAwesomeIcon className="icon" icon={['fas', 'map-marker-alt']} /><span>Maps</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="notification"><FontAwesomeIcon className="icon" icon={['fas', 'bell']} /><span>Notifications</span></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="support"><FontAwesomeIcon className="icon" icon={['fas', 'globe']} /><span>RTL Support</span></Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} className="right-side">
              <Tab.Content >
                <Tab.Pane eventKey="user-profile">
                  <CreateUser
                    onChangetext={onChangetext}
                    onCreate={onCreate}
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="table-list" className="right-side-content">
                  <View />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </div>

      </Tab.Container>
    </div>
  )
}
export default Create;