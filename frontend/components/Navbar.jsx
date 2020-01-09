import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import GreetingContainer from './greeting/greeting_container';
import DemoLoginContainer from './personal/demologin_container.jsx'


const Navbar = () => (
    <div className="entire-nav-bar">
        <div className="navbar-left">
            <i class="fas fa-bars"></i>
            <header className="nav-1">
                <Link to="/" className="header-link">
                    <img src={window.logoURL} width='100px'
                        height='50px' alt="logo" />
                </Link>

            </header>

            
            <form className="search-bar">
                <input className="search-bar-text" type="text" />
                <button className="search-bar-button">
                    <i class="fas fa-search"></i>
                </button>
            </form>
        </div>
        
        <div className="right-side-nav">
            <Route exact path="/" component={DemoLoginContainer} />
            <Route exact path="/" component={GreetingContainer} />

        </div>
        

    </div>
);

export default Navbar;