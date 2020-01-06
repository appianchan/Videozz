import Greeting from "./greeting";
import { logout } from "../../actions/session_actions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    const user = state.entities.users[state.session.id];
    // debugger;
    // current_user: { state.entities.users[state.session.id] }
    return ({
        user: user
    })
};

const mapDispatchToProps = dispatch => ({
    
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);
