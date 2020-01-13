import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import GreetingContainer from './greeting/greeting_container';
import DemoLoginContainer from './personal/demologin_container.jsx';
import SearchBar from "./search_bar/search_bar";



    
export default class Navbar extends React.Component{
    
    constructor(props) {
        super(props);
    }


    render(){
        // debugger;
    return(
        <div className="entire-nav-bar">
            <div className="navbar-left">
                <i class="fas fa-bars"></i>
                <header className="nav-1">
                    <Link to="/" className="header-link">
                        <img src={window.logoURL} width='100px'
                            height='50px' alt="logo" />
                    </Link>

                </header>
                
                {/* <Route exact path="/" render={() => (
                    <form className="search-bar" onSubmit={this.handleSubmit}>
                        <input 
                        className="search-bar-text" 
                        type="text" 
                        value={this.state.search}
                        onChange={this.handleInput('search')}/>
                        <button type="submit" className="search-bar-button">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                )} /> */}
                <Route path="/" render={() => (
                    <SearchBar func={this.props.func}/>
                )} />
                <Route path="/videos" render={() => (
                    <SearchBar />
                )} />
                

                    
            
                
            </div>
            
            
            <div className="right-side-nav">
                <Route exact path="/" component={DemoLoginContainer} />
                <Route exact path="/" component={GreetingContainer} />
                <Route path="/videos" component={DemoLoginContainer} />
                <Route path="/videos" component={GreetingContainer} />

            </div>
            

        </div>
     )   
    }
}

