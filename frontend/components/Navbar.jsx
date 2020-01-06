import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import GreetingContainer from './greeting/greeting_container';


const Navbar = () => (
    <div className="entire-nav-bar">
        <header className="nav-1">
            <Link to="/" className="header-link">
                <img src={window.logoURL} width='100px'
                    height='50px' alt="logo" />
            </Link>

        </header>
        <div className="right-side-nav">
            <Route exact path="/">
                <a href="https://www.linkedin.com/in/anthony-chan-02381a81/"><i class="fab fa-linkedin"></i></a>
                <a href="https://angel.co/anthony-chan-26"><i class="fab fa-angellist"></i></a>
                <a href="https://github.com/appianchan"><i class="fab fa-github"></i></a>
            </Route>
            
            
            <Route exact path="/" component={GreetingContainer} />

        </div>
        

    </div>
);

export default Navbar;