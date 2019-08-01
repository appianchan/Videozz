import * as ApiFn from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
// export const LOGIN_CURRENT_USER = "LOGIN_CURRENT_USER";

const receiveCurrentUser = user => {
    return {
        type: RECEIVE_CURRENT_USER,
        user
    };
};

const logoutCurrentUser = user => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => {
    console.dir(errors);
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    };
};

export const createNewUser = formUser => dispatch =>
    ApiFn.signup(formUser).then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors))
    );

export const login = formUser => dispatch =>
    ApiFn.login(formUser).then(
        user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors))
    );

export const logout = () => dispatch =>
    ApiFn.logout().then(user => dispatch(logoutCurrentUser(user)));