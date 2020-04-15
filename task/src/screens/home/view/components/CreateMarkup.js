import React from "react";
import { Tab, Col, Nav, Row, Card, Button } from 'react-bootstrap';

import './CreateMarkup.scss'
const CreateUser = (props) => {
    const { onChangetext, onCreate } = props;
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
                            <input onChangetext={onChangetext} name="company" type="text" class="form-control" aria-describedby="inputGroup-sizing-sm" placeholder="Company" disabled />
                        </Col>
                        <Col md="3">
                            <input onChangetext={onChangetext} type="text" name="username" class="form-control" aria-describedby="inputGroup-sizing-sm" placeholder="Username" />

                        </Col>
                        <Col md="4">
                            <input onChangetext={onChangetext} type="email" name="email" class="form-control" placeholder="Email Address" />

                        </Col>
                    </Row>
                    <Row className="alingn">
                        <Col md="6">

                            <input onChangetext={onChangetext} type="text" name="first_name" class="form-control" placeholder="First Name" />
                        </Col>
                        <Col md="6">

                            <input onChangetext={onChangetext} type="text" name="last_name" class="form-control" placeholder="Last Name" />
                        </Col>

                    </Row>
                    <Row className="alingn">
                        <Col md="5">
                            <input onChangetext={onChangetext} type="text" name="city" class="form-control" placeholder="City" />
                        </Col>
                        <Col md="3">
                            <input onChangetext={onChangetext} type="text" name="country" class="form-control" placeholder="Country" />

                        </Col>
                        <Col md="4">
                            <input onChangetext={onChangetext} type="number" name="postal_code" class="form-control" placeholder="Postal Code" />

                        </Col>
                    </Row>
                    <Row>
                        <Col className="about">
                            About me
                </Col>
                    </Row>
                    <Row className="alingn">
                        <textarea onChangetext={onChangetext} name="about" defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo." class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </Row>
                    <Row className="button-container">
                        <Button onClick={onCreate} className="button">
                            Update Profile
                </Button>
                    </Row>
                </form>
            </Card>
        </div>
    )
}
export default CreateUser;