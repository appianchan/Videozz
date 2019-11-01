import React from "react";
import { Link, withRouter } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        // console.log('this is my props:', props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.renderErrors = this.renderErrors.bind(this);
    }
    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value });
        };
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
        .then(() => this.props.history.push("/"));
    }

    renderErrors() {
    
            // <ul>
            //     {this.props.errors.map.responseJSON.map((error, i) => (
            //         <li key={`error-${i}`}>
            //             {error}
            //         </li>
            //     ))}
            // </ul>
        
      // debugger;

      if (this.props.errors instanceof Array || this.props.errors === null) {
        return (
          []
        )
      }else{
        // debugger;
        console.log(this.props.errors);
        return (
          // this.props.errors.responseJSON
          <ul>
                {this.props.errors.responseJSON.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
      }
    }

    render(){
    return (
        <div className="login-form-container">

        <form onSubmit={this.handleSubmit} className="login-form-box">
          <img src={window.logoURL} width='75px'
            height='75px' alt="logo" className="logo-sign-in"/>
          <h1 className="Welcome-to-Videozz" >Welcome to Videozz!</h1>
          <br/>
          <div className="Choose">Please {this.props.formType} or {this.props.navLink}</div>
          <br/>
          
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                className="username"
              />
            </label>
            <br/>
            
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                className="password"
              />
            </label>
            {this.renderErrors()}
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}




export default withRouter(SessionForm);