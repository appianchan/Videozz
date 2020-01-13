import React from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import GreetingContainer from './greeting/greeting_container';
import DemoLoginContainer from './personal/demologin_container.jsx';



    
export default class Navbar extends React.Component{
    
    constructor(props) {
        super(props);

        this.state = {
            redirect: false,
            search: ""
        };
        // this.handleInput = this.handleInput.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    // handleInput(type) {
    //     return e => {
    //         this.setState({ [type]: e.target.value });
    //     };
    // }
    // handleSubmit(){
    //     // this.setState({redirect: true});
    // }


    render(){

    if (this.state.redirect === true) {
        return <Redirect to='/search' />;
    } else { return(
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
                    <form className=" search-bar">
                        <input className="search-bar-text" type="text" />
                        <button type="button" className="search-bar-button">
                            <i class="fas fa-search"></i>
                        </button>
                    </form>
                )} />
                <Route path="/videos" render={() => (
                <form className=" search-bar">
                <input className="search-bar-text" type="text" />
                <button type="button" className="search-bar-button">
                    <i class="fas fa-search"></i>
                </button>
                    </form>
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
}
