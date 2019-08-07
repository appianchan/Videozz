import { RECEIVE_SESSION_ERRORS, DELETE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';


const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    // debugger;
    //let newState = [];
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return []; //before return Object.assign(action.errors, {})
        case RECEIVE_SESSION_ERRORS:
            // debugger;
            return action.errors;
        // case DELETE_SESSION_ERRORS:
        //     return [];
        
        default:
            return state;
    }
};

export default sessionErrorsReducer;
