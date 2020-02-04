import { Link } from "react-router-dom";
import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false
        }
        console.log(props);
        console.log("constructor: This props user: ", this.props.user);
        this.myFunction = this.myFunction.bind(this);
    }
    myFunction(e) {
        e.preventDefault();
        // const i = document.getElementsByClassName("dropdown-content");
        
        if(this.state.dropdown === false){
            this.setState((state, props) => ({
                dropdown: true
            }))
        } else{ 
            this.setState((state, props) => ({
                dropdown: false
            }))
        }
    }
    upload(e){
        e.preventDefault();
        this.props.history.push("/upload");
    }

    logout(e){
        e.preventDefault();
        this.props.logout().then(this.setState((state, props) => ({
            dropdown: false
        })))
    }


    render(){
    
    if (this.props.user) {
        return (
            <div className="greeting-text-block">
                
                {/* <button className="logout-button" onClick={this.props.logout}>Logout </button> */}
                {/* <h3 className="greeting-message"> Hello {this.props.user.username} </h3> */}
                <i class="fas fa-upload" onClick={this.upload.bind(this)}></i>
                <i class="far fa-list-alt"></i>
                <i class="fas fa-bell"></i>
                
                <div class="dropdown-user">
                    <i onClick={this.myFunction} class="fas fa-user-circle" ></i>
                    <div id="myDropdown" style={{ display: this.state.dropdown === false ? "none" : "initial" }} className="dropdown-content">
                        <div className="greeting-text-dropdown"> 
                            <i class="fas fa-user-circle"></i>
                            <h3 className="greeting-message"> {this.props.user.username} </h3>
                        </div>
                        <div className="logout-text-dropdown" onClick={this.logout.bind(this)}>
                            <i class="fas fa-sign-out-alt"></i> 
                            <div className="logout-text">Sign out</div>
                        </div>
                    </div>
                </div>
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