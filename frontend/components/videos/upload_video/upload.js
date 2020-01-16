import React from 'react'
import { Link, Route } from 'react-router-dom';



export default class VideoIndex extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            creator: this.props.user || "",
            user_id: this.props.currentUserId,
            views: "0",
            date_created: "Jan 15, 2020",
            title: "",
            description: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value });
        };
    }
    handleSubmit(){
        this.props.history.push("/");
    }

    render() {

        return (
           <form onSubmit={this.handleSubmit} className="upload-container">
               <label>Title:
                    <input type="text"
                        className="upload-title"
                        value={this.state.title}
                        onChange={this.handleInput('title')}
                    />
               </label>
               
                <label>Description:
                    <input type="text"
                        className="upload-title"
                        value={this.state.title}
                        onChange={this.handleInput('title')}
                    />
                </label>

                <input className="upload-submit" type="submit" value="Upload" />
           </form>
        )
    }
}