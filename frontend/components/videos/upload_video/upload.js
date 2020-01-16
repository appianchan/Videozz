import React from 'react'
import { Link, Route } from 'react-router-dom';



export default class Upload extends React.Component {

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
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[creator]', this.state.creator);
        formData.append('video[user_id]', this.state.user_id);
        formData.append('video[date_created]', this.state.date_created);
        formData.append('video[view_count]', this.state.views);
        formData.append('video[video_attatchment]', this.state.photoFile);
        // this.props.history.push("/")
        $.ajax({
            url: '/api/videos',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then(
            (response) => console.log(response.message),
            (response) => console.log(response.responseJSON)
            );
        // this.props.history.push("/")
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
                        className="upload-description"
                        value={this.state.description}
                        onChange={this.handleInput('description')}
                    />
                <input type="file" onChange={this.handleFile}></input>
                </label>

                <input className="upload-submit" type="submit" value="Upload" />
           </form>
        )
    }
}