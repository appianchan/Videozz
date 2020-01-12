import React from 'react'
import { Link, Route } from 'react-router-dom';



export default class VideoIndexNavbar extends React.Component {
    constructor(props) {
        super(props);
        // debugger;
        this.state = {
            
        };
        
        
    }

    render(){
        return(
            <div className="index-navbar">
                <div className="home">
                    <i class="fas fa-home"></i>
                    <div className="home-icon-text">Home</div>
                </div>
                <a className="linkedin" href="https://www.linkedin.com/in/anthony-chan-02381a81/">
                    <i class="fab fa-linkedin"></i>
                    <div className="LinkedIn-icon-text">LinkedIn</div>
                </a>
                <a className="angellist" href="https://angel.co/anthony-chan-26">
                    <i class="fab fa-angellist"></i>
                    <div className="angellist-icon-text"> Angellist</div>
                </a>
                <a className="github" href="https://github.com/appianchan">
                    <i class="fab fa-github"></i>
                    <div className="github-icon-text">Github</div>
                </a>
                
                
                
                
            </div>
        )
    }
}