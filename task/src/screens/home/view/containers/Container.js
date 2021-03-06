import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Markup from '../components/Markup';
import actions from '../modules/actions';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            company: '',
            username: '',
            email: '',
            first_name: '',
            last_name: '',
            city: '',
            country: '',
            postal_code: '',
            about: ''

        }
    }
    componentDidMount() {
        this.props.actions.getAllStudents()

    }

    onChangetext = (e) => {
        console.log(e)
        this.setState({
            [`${e.target.name}`]: e.target.value
        });
    }

    onCreate = () => {
        const {
            company,
            username,
            email,
            first_name,
            last_name,
            city,
            country,
            postal_code,
            about

        } = this.state;

        const data = {
            company: company,
            username: username,
            email: email,
            first_name: first_name,
            last_name: last_name,
            city: city,
            country: country,
            postal_code: postal_code,
            about: about
        }

        const handleSuccess = (data) => {
            this.props.actions.getAllStudents()
            alert("Created Successfully")
        };
        this.props.actions.createUser(handleSuccess, data);
    }
    render() {
        return (
            <Markup
                onChangetext={this.onChangetext}
                onCreate={this.onCreate}
                userList={this.props.userList}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        userList: state.home.userList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));
