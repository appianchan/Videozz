import { Link } from "react-router-dom";
import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions"

import loginForm from "./session_form";

const mapStateToProps = (state, ownProps) => {
    const errors = state.errors.session;
    state.errors.session = null;
    // debugger;
    return {
        errors: errors,
        navLink: <Link to="/signup">sign up instead</Link>,
        formType: "login"
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    //mapDispatchToProps
)(loginForm);
