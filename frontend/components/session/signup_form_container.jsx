import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

import signupForm from "./session_form";

const mapStateToProps = (state, ownProps) => {
    const errors = state.errors.session;
    return {
        errors: errors,
        formType: "Signup",
        navLink: <Link to="/login">log in instead</Link>
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: user => dispatch(createNewUser(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    //mapDispatchToProps
)(signupForm);
