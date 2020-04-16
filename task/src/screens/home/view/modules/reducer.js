import Constants from './Constants';

const INITIAL_STATE = {
    userList: [],
    error: false,
    isLoading: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Constants.GET_ALL_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case Constants.GET_ALL_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userList: action.payload
            };
        case Constants.GET_ALL_USER_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case Constants.POST_USER_REQUEST_:
            return {
                ...state,
                isFetching: false,
                error: action.error
            };
        case Constants.POST_USER_REQUEST_FAIL:
            return {
                ...state,
                isFetching: false,

            };
        case Constants.POST_USER_REQUEST_SUCCESS:
            return {
                ...state,
                isFetching: false,

            };
        default:
            return state;
    }
};
