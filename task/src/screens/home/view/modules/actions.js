
import Constants from './Constants';
import { API } from '../../../../env';

const getAllStudents = () => {
    return (dispatch) => {
        dispatch({
            type: Constants.GET_ALL_STUDENTS_REQUEST
        });
        return fetch(`${API}api/list`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })

            .then(response => response.json().then(body => ({ response, body })))
            .then(({ response, body }) => {
                if (!response.ok) {
                    dispatch({
                        type: Constants.GET_ALL_STUDENTS_FAIL,
                        payload: body.error
                    });
                } else {
                    dispatch({
                        type: Constants.GET_ALL_STUDENTS_SUCCESS,
                        payload: body
                    });
                }
            });
    }
}


// const contactUs = (handleSuccess, data) =>{
//     return function (dispatch) {
//         dispatch({
//             type: Constants.SAAS_CONTACT_REQUEST
// 		});
//             return fetch(`api/contactus/create/`, {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json'
//             }

//         })
//             .then(response => response.json()
//             .then(body => ({ response, body })))
//             .then(({ response, body }) => {
// 				if (!response.ok) {
//                     dispatch({
//                         type: Constants.SAAS_CONTACT_REQUEST_FAIL,
//                         payload: body.error
//                     });
//                 } else {
//                     dispatch({
//                         type: Constants.SAAS_CONTACT_REQUEST_SUCCESS,
// 						payload: body
//                     });
//                      handleSuccess(body);
//                 }
//             });
//     }


// }
export default {
    getAllStudents,
}