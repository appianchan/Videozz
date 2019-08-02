import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header className="nav-1">
            <Link to="/" className="header-link">
                Videozz
            </Link>
            
        </header>

    <Switch>
            <Route exact path="/" component={GreetingContainer} />
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
        
    </div>
);

export default App;