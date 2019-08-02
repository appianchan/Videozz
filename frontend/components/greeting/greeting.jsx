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
            <div>
                <h3> Hello {this.props.user.username} </h3>
                <button onClick={this.props.logout}>Logout </button>
            </div>
        );
    } else {
        return (
            <div>
                {/* <p>{this.props.errors.responseJSON}</p> */}
                <Link to="/signup">Signup</Link>
                <br />
                <Link to="/login">Login</Link>
            </div>
        );
    }
    }

}

export default Greeting;