import { Link } from "react-router-dom";
import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        console.log("constructor: This props user: ", this.props.user);
    }

    render(){
    if (this.props.user) {
        return (
            <div className="greeting-text-block">
                <h3 className="greeting-message"> Hello {this.props.user.username} </h3>
                <button className="logout-button" onClick={this.props.logout}>Logout </button>
            </div>
        );
    } else {
        return (
            <div className="nav-2">
                
                <Link className="signup-button" to="/signup">
                    <i class="fas fa-user-circle"></i>
                    <div className="signin-words">SIGN IN</div>
                </Link>
                {/* <Link className="login-button" to="/login">Login</Link> */}
            </div>
        );
    }
    }

}

export default Greeting;