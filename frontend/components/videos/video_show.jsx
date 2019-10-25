import React from 'react'

export default class VideoShow extends React.Component {

    constructor(props){
        super(props);
    }
    componentDidMount() {
        const videoId = this.props.videoId;
        this.props.requestAVideo(videoId);
    }

    render() {
        const video = this.props.video;
        if (!video) {
            return null;
        }
        // debugger;
        return (

            <div className="show-container">
                <div className="video-container">
                    <video className="show-video" width="1600px" height="700px" src={`${this.props.video.videoUrl}`} controls>
                </video>
                </div>
                <div className="title-container">
                    <div className="show-title">{this.props.video.title}</div>
                </div>
                
                <div className="description-container">
                    <div className="description-title">Description:</div>
                    
                    <div className="show-description">{this.props.video.description}</div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
            </div>
        )
    }
}