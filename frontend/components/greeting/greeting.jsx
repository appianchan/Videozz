import { Link } from "react-router-dom";
import React from "react";

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown_user: false,
            dropdown_list: false
        }
        console.log(props);
        console.log("constructor: This props user: ", this.props.user);
        this.userDropdown = this.userDropdown.bind(this);
        this.listDropdown = this.listDropdown.bind(this);
        this.collapse = this.collapse.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        this.handleUserBubble = this.handleUserBubble.bind(this);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
        document.addEventListener('click', this.handleUserBubble, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
        document.removeEventListener('click', this.handleUserBubble, true);
    }
    handleUserBubble(e){
        // e.preventDefault();
        // debugger;
        if (e.target.className === 'dropdown-user' && this.state.dropdown_user === false) {
            debugger;
            this.setState({ dropdown_user: true })
        } else {
            // debugger;
            this.setState({ dropdown_user: false })
        }
    }

    handleClickOutside(e){
        // e.preventDefault();
        if(e.target.className === 'far fa-list-alt' && this.state.dropdown_list === false){
            // debugger;
            this.setState({dropdown_list: true})
        } else {
            // debugger;
            this.setState({ dropdown_list: false })
        }
    }
    userDropdown(e) {
        e.preventDefault();
        // const i = document.getElementsByClassName("dropdown-content");
        
        if(this.state.dropdown_user === false){
            this.setState((state, props) => ({
                dropdown_user: true,
                dropdown_list: false
            }))
        } else{ 
            this.setState((state, props) => ({
                dropdown_user: false
            }))
        }
    }
    listDropdown(e){
        e.preventDefault();
        if (this.state.dropdown_list === false) {
            this.setState((state, props) => ({
                dropdown_list: true,
                dropdown_user: false
            }))
        } else {
            this.setState((state, props) => ({
                dropdown_list: false
            }))
        }
    }
    onClickHandler(){
                this.setState((state, props) => ({
                    dropdown_user: false,
                    dropdown_list: false
                }))
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
    collapse(){
                this.setState((state, props) => ({
                    dropdown_user: false,
                    dropdown_list: false
                }))
    }


    render(){
        // window.onclick = function (event) {
        //     if (!event.target.matches('.fa-list-alt')) {
        //         this.setState((state, props) => ({
        //             dropdown_user: false,
        //             dropdown_list: false
        //         }))
        //     }
        // }
        
        if (this.props.user) {
            
        return (
            <div className="greeting-text-block">
                
                {/* <button className="logout-button" onClick={this.props.logout}>Logout </button> */}
                {/* <h3 className="greeting-message"> Hello {this.props.user.username} </h3> */}
                <i class="fas fa-upload" onClick={this.upload.bind(this)}></i>
                <div class="dropdown-other-projects">
                    <i class="far fa-list-alt" ></i>
                    <div style={{ display: this.state.dropdown_list === false ? "none" : "initial" }} className="dropdown-content-list">
                        <div className="dropdown-project-list-intro-text">Check out my other projects!</div>
                        <div className="project-link-list">
                            <a className="Spaceship-Fighters" href="https://appianchan.github.io/Spaceship-Fighters/">Spaceship-Fighters</a>
                            <a className="RipCamp" href="https://ripcamp.herokuapp.com/#/">RipCamp</a>
                            <a className="Forgetful" href="https://forgetful-task-management.herokuapp.com/">Forgetful</a>
                        </div>
                        
                    </div>
                </div>
                
                <i class="fas fa-bell"></i>
                
                <div class="dropdown-user">
                    <i class="fas fa-user-circle" ></i>
                    <div id="myDropdown" style={{ display: this.state.dropdown_user === false ? "none" : "initial" }} className="dropdown-content">
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