import React from 'react';
import Likes from './likes';
import Reviews from './reviews';

export default class VideoShow extends React.Component {

    constructor(props){
        super(props);
        // debugger;
    
        this.state = {
            video: this.props.video || []
        };
        
    }
    componentDidMount() {
        const videoId = this.props.videoId;
        this.props.requestAVideo(videoId);
        // debugger;
        if (this.props.video) {
            this.props.update(this.props.video);
        }
        // this.props.update(this.props.video);
    }
    

    render() {
        
        const video = this.props.video;
        debugger;
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
                    <Likes
                        id={this.props.video.id}
                        update={this.props.update}
                        likes={this.props.video.likes}
                        currentUserId={this.props.currentUserId}
                        video={this.props.video} />
                </div>
                
                {/* <div>
                    <div className="show-likes" onClick={this.handleClick}>Likes: {this.props.video.likes.length}</div>
                </div> */}
                
                
                <div className="description-container">
                    <div className="description-title">Description:</div>
                    
                    <div className="show-description">{this.props.video.description}</div>
                </div>
                <div className="review-container">
                    <Reviews 
                        id={this.props.video.id}
                        update={this.props.update}
                        reviews={this.props.video.reviews}
                        currentUserId={this.props.currentUserId}
                        video={this.props.video}
                    />
                </div>
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
            </div>
        )
    }
}