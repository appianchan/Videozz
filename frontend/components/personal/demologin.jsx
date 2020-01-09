import React from "react";
import { Link, withRouter } from "react-router-dom";

class DemoLogin extends React.Component {
    constructor(props) {
        super(props);
        // console.log('this is my props:', props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleButtonSubmit = this.handleButtonSubmit.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);
    }
    handleButtonSubmit(e) {
        e.preventDefault();
        this.state.username = "ilovevideos";
        this.state.password = "abcdefg"
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push("/"));
        

    }

    render() {
        if (!this.props.user){
            return (
                <button type="button" className="demologin-button" onClick={this.handleButtonSubmit}>
                    <i class="fas fa-user-circle"></i>
                    <div className="demologin-words">DemoLogin</div>
                </button>
            );
        } else {
            return(
                <div></div>
            );
        }
        
    }
}




export default withRouter(DemoLogin);