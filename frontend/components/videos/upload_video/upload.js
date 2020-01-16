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
            description: "",
            photoFile: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }
    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value });
        };
    }
    handleFile(e){
        debugger;
        this.setState({photoFile: e.currentTarget.files[0]})
    }
    handleSubmit(e){
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('')
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
                <input type="file" onChange={this.handleFile}></input>
                </label>

                <input className="upload-submit" type="submit" value="Upload" />
           </form>
        )
    }
}