
import Constants from './Constants';
import { API } from '../../../../env';

const getAllStudents = () => {
    return (dispatch) => {
        dispatch({
            type: Constants.GET_ALL_USER_REQUEST
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
                        type: Constants.GET_ALL_USER_FAIL,
                        payload: body.error
                    });
                } else {
                    dispatch({
                        type: Constants.GET_ALL_USER_SUCCESS,
                        payload: body
                    });
                }
            });
    }
}


const createUser = (handleSuccess, data) => {
    return function (dispatch) {
        dispatch({
            type: Constants.POST_USER_REQUEST
        });
        return fetch(`${API}api/create`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(response => response.json()
                .then(body => ({ response, body })))
            .then(({ response, body }) => {
                if (!response.ok) {
                    dispatch({
                        type: Constants.POST_USER_REQUEST_FAIL,
                        payload: body.error
                    });
                } else {
                    dispatch({
                        type: Constants.POST_USER_REQUEST_SUCCESS,
                        payload: body
                    });
                    handleSuccess(body);
                }
            });
    }


}
export default {
    getAllStudents,
    createUser
}