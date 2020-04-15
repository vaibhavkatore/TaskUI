import Constants from './Constants';

const INITIAL_STATE = {
    studentsList: [],
    error: false,
    isLoading:false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Constants.GET_ALL_STUDENTS_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case Constants.GET_ALL_STUDENTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                studentsList: action.payload
            };
        case Constants.GET_ALL_STUDENTS_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }; 
        case Constants.SAAS_CONTACT_REQUEST_:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        case Constants.SAAS_CONTACT_REQUEST_FAIL:
            return {
                ...state,
                isFetching: false,
                
            };
        case Constants.SAAS_CONTACT_REQUEST_SUCCESS:
            return {
                ...state,
                isFetching: false,
               
            };
        default:
            return state;
    }
};
