import React from "react";
import { Redirect, Link } from "react-router-dom";

export default class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: "",
            redirect: false
        }
        this.handleInput = this.handleInput.bind(this);
        // this.reloadRoute = this.reloadRoute.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value });
        };
    }
    // reloadRoute () {
    //     router.push({ pathname: '/empty' });
    //     router.replace({ pathname: '/search' });
    // }


    render(){
        return(

            // <form className="search-bar" onSubmit={this.handleSubmit}>
            //     <input className="search-bar-text" type="text" onChange={this.handleInput("search")}/>
            //     <button type="submit" className="search-bar-button">
            //         
            //     </button>
            // </form>
            <div className="search-bar">
                <input className="search-bar-text" type="text" onChange={this.handleInput("search")} />
                <Link 
                // onClick={this.reloadRoute}
                className="search-bar-button" 
                to={{pathname: '/search',
                state: {
                    search: this.state.search,
                    
                }}}>
                <i class="fas fa-search"></i>
                </ Link>
            </div>
        )
    }
}