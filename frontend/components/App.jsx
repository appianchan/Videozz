import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute } from '../util/route_util';
// import logo from '/Users/anthonychan/Desktop/Fullstack Project/app/assets/stylesheets/YouTube-618x350.jpg';

const App = () => (
    <div>
        <header className="nav-1">
            <Link to="/" className="header-link">
                <img src='https://amp.businessinsider.com/images/59a59a8d79bbfd1d008b601a-960-480.png' width='100px'
    height='50px' alt="logo"/>
            </Link>
            {/* <img src={require('/Users/anthonychan/Desktop/Fullstack Project/app/assets/stylesheets/YouTube-618x350.jpg')} /> */}
        </header>

    <Switch>
            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
        
    </div>
);

export default App;