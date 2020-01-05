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
                <i class="fas fa-home"></i>
                <i class="fas fa-fire"></i>
                <i class="fab fa-youtube-square">Subscriptions</i>
                <i class="fas fa-folder"></i>
            </div>
        )
    }
}