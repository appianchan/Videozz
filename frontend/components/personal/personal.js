import { Link } from "react-router-dom";
import React from "react";

class Personal extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return(
            <div>
                <a href="https://www.linkedin.com/in/anthony-chan-02381a81/"><i class="fab fa-linkedin"></i></a>
                <a href="https://angel.co/anthony-chan-26"><i class="fab fa-angellist"></i></a>
                <a href="https://github.com/appianchan"><i class="fab fa-github"></i></a>
            </div>
        
        )
    }

}

export default Personal;