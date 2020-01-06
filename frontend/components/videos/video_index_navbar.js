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
                <div className="trending">
                    <i class="fas fa-fire"></i>
                    <div className="trending-icon-text">Trending</div>
                </div>
                <div className="subscribe">
                    <i class="fab fa-youtube-square"></i>
                    <div className="subscribe-icon-text"> Subscriptions</div>
                </div>
                <div className="Library">
                    <i class="fas fa-folder"></i>
                    <div className="library-icon-text">Library</div>
                </div>
                
                
                
                
            </div>
        )
    }
}