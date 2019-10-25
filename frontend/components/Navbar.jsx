import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import GreetingContainer from './greeting/greeting_container';


const Navbar = () => (
    <div className="entire-nav-bar">
        <header className="nav-1">
            <Link to="/" className="header-link">
                <img src='images/logo.png' width='100px'
                    height='50px' alt="logo" />
            </Link>
            {/* <img src={require('/Users/anthonychan/Desktop/Fullstack Project/app/assets/stylesheets/YouTube-618x350.jpg')} /> */}

        </header>
        <Route exact path="/" component={GreetingContainer} />

    </div>
);

export default Navbar;