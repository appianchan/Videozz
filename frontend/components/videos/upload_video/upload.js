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
            photoFile: null,
            photoUrl: null,
            errors: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        // this.modalChanges = this.modalChanges.bind(this);
    }
    handleInput(type) {
        return e => {
            this.setState({ [type]: e.target.value });
        };
    }
    handleFile(e){
        const file = e.currentTarget.files[0];
        // if (file.size > 20000000){
        //     this.setState({ photoFile: null, photoUrl: null})
        // } else {
            const fileReader = new FileReader();
            fileReader.onloadend = () => {

                this.setState({ photoFile: file, photoUrl: URL.createObjectURL(file) })
            }
            if (file) {
                fileReader.readAsDataURL(file);
            }
        // }
            
        
    }
    renderErrors() {
        debugger;
        if (this.state.errors instanceof Array || this.state.errors === null) {
            return (
                []
            )
        } else {
            // debugger;
            return (
                // this.props.errors.responseJSON
                <ul>
                    {this.state.errors.responseJSON.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
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
        if(this.state.photoFile){
            formData.append('video[video_attatchment]', this.state.photoFile);
        }
        
        // this.props.history.push("/")
        return $.ajax({
            url: '/api/videos',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).then(
            response => console.log(response.message),
            response => this.setState({errors: response.responseJSON})
        )
        
            
            
        //     errors => dispatch( {
        //     type: "RECEIVE_SESSION_ERRORS",
        //     errors
        // }));
        // this.props.history.push("/")
    }
    // modalChanges(){
    //     // Get the modal
    //     var modal = document.getElementById("upload-modal");

    //     // Get the button that opens the modal
    //     var btn = document.getElementById("Upload-form-info");

    //     // Get the <span> element that closes the modal
    //     var span = document.getElementsByClassName("close")[0];

    //     debugger;
    //     // When the user clicks the button, open the modal 
    //     if (modal !== null){
    //         btn.onclick = function () {
    //             modal.style.display = "block";
    //         }

    //         // When the user clicks on <span> (x), close the modal
    //         span.onclick = function () {
    //             modal.style.display = "none";
    //         }

    //         // When the user clicks anywhere outside of the modal, close it
    //         window.onclick = function (event) {
    //             if (event.target == modal) {
    //                 modal.style.display = "none";
    //             }
    //         }
    //     }
        
    // }
    

    renderErrors() {
       
        if (this.state.errors === [] || this.state.errors === null) {
            return (
                []
            )
        } else {
            debugger;
            return (
                // this.props.errors.responseJSON
                <ul>
                    {this.state.errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        // this.renderErrors();
        // debugger;
        const preview = this.state.photoUrl ? 
            <video width="100%" height="100%" src={this.state.photoUrl} controls></video> : 
            <label for="filez" className="initial-upload-button-container"><i class="fas fa-upload"></i> &nbsp;&nbsp;<input className="hidden-button" id="filez" type="file" onChange={this.handleFile}></input><label className="initial-upload-button" for="filez">Choose A Video</label></label>;
        // debugger;
        const preview_button = this.state.photoUrl ? 
        <div className="upload-button-group">
            <label className="alt-upload-button-container">
                <i class="fas fa-upload"></i>&nbsp;&nbsp;<input className="hidden-button" id="filez2" type="file" onChange={this.handleFile}></input>
                <label for="filez2">Choose Another Video Instead</label>
            </label>


            
        </div> : 
        
        null ;
        // this.modalChanges();
        return (
            <form onSubmit={this.handleSubmit} className="upload-container">
                <div className="upload-file-container">
                    {preview}
                </div>
                
                {preview_button}
                
                
                
                <div id="upload-modal" className="upload-modal">
                    <div className="upload-information">
                        <p className="upload-title">Title: </p>
                        <input type="text"
                            className="upload-title-info"
                            value={this.state.title}
                            onChange={this.handleInput('title')}
                        />
                        

                        <p className="upload-description">Description: </p>
                        <textarea row="500" col="1500"
                            className="upload-description-info"
                            value={this.state.description}
                            onChange={this.handleInput('description')}
                        />
                            {/* <input type="file" onChange={this.handleFile}></input> */}
                    </div>
                    {/* {this.state.errors} */}
                    {this.renderErrors()}
                    
                <input className="upload-submit" type="submit" value="Upload" />
                </div>
            
                
               
                


                
           </form>
        )
    }
}