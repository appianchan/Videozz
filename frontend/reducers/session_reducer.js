import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER,
    ERRORS
} from "../actions/session_actions";
import { merge } from "lodash";
const _nullSession = { currentUser: null };

const sessionReducer = (state = _nullSession, action) => {
    Object.freeze(state);
    //debugger;
    switch (action.type) {
        case RECEIVE_CURRENT_USER:

            return merge({}, state, { id: action.user.id });
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
};

export default sessionReducer;
