import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Markup from '../components/Markup';
import actions from '../../view/modules/actions';

class Container extends Component {
	constructor(props) {
		super(props);
		// this.state = {
        //     firstNameVal: "",
        //     emailVal: "",
        //     phoneVal:"",
        //     organizationNameVal: "",
        //     errors: {},
        //     invalid: false

        // }
    }
    componentDidMount(){
        this.props.actions.getAllStudents()
    }

	// onChangetext = (e) => {
    //     this.setState({
    //         [`${e.target.name}`]: e.target.value
    //     });
    // }

	// onContactUs = () =>{
    //     const {
    //         firstNameVal: first_name,
    //         emailVal: email,
    //         phoneVal: phone_number,
    //         organizationNameVal: company_name,

    //     } = this.state;

    //         const data = {
    //             email,
    //             first_name,
    //             phone_number,
    //             company_name
    //             }                
    
    //         const handleSuccess = (data) => {
	// 			alert("ContactUs Successfully")
	// 		};
    //          this.props.actions.contactUs(handleSuccess, data);
    //     }
	render() {
		return (
			<Markup
			/>
		);
	}
}
const mapStateToProps = (state) => {
    console.log("mapstate>>>>>>>>>>>>>>>",state)
    return {
        userList: state.home.studentsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
};
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Container));
