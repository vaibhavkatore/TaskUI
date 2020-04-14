import Constants from './Constants';

const INITIAL_STATE = {
    studentsList: [],
    student:{},
    report:{},
    isUploadFetching: false,
    isEvaluateFetching: false,
    error: false,
    saasData: null,
    saasResult: null,
    updateReport:{},
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
        case Constants.GET_STUDENT_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case Constants.GET_STUDENT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                student: action.payload
            };
        case Constants.GET_STUDENT_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case Constants.GET_COURSE_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case Constants.GET_COURSE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                student: action.payload
            };
        case Constants.GET_COURSE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            }; 
        case Constants.GET_STUDENT_REPORT_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case Constants.GET_STUDENT_REPORT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                report: action.payload
            };
        case Constants.GET_STUDENT_REPORT_FAIL:
            return {
                ...state,
                isLoading: false,
            }
        case Constants.SAAS_UPLOAD_REQUEST:
            return {
                ...state,
                isUploadFetching: true
            };
        case Constants.SAAS_UPLOAD_REQUEST_SUCCESS:
            return {
                ...state,
                isUploadFetching: false,
                saasData: action.payload
            };
        case Constants.SAAS_UPLOAD_REQUEST_FAIL:
            return {
                ...state,
                isUploadFetching: false,
                error: action.error
            };
        case Constants.UPDATE_REPORT_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case Constants.UPDATE_REPORT_SUCCESS:
            return {
                ...state,
                isFetching: false,
                updateReport: action.payload
            };
        case Constants.UPDATE_REPORT_FAIL:
            return {
                ...state,
                isFetching: false,
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
