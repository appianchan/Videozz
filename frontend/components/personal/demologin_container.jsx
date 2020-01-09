import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions"

import demologin from "./demologin";

const mapStateToProps = (state, ownProps) => {
    const errors = state.errors.session;
    const user = state.entities.users[state.session.id];
    // debugger;
    return {
        errors: errors,
        navLink: <Link to="/signup">sign up instead</Link>,
        formType: "login",
        user: user
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    //mapDispatchToProps
)(demologin);
