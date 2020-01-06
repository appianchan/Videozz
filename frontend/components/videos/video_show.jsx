import React from 'react';
import LikesandDislikes from './likes';
import Reviews from './reviews';
// import Dislikes from './dislikes';
import Playlist from './video_show_components/playlist'

export default class VideoShow extends React.Component {

    constructor(props){
        super(props);
    
        this.state = {
            video: this.props.video || []
        };
        
    }
    componentDidMount() {
        const videoId = this.props.videoId;
        this.props.requestAVideo(videoId);
        // if (this.props.video) {
        //     this.props.update(this.props.video);
        // }
        // this.props.update(this.props.video);
    }
    

    render() {
        // debugger;
        const video = this.props.video;
        if (!video) {
            return null;
        }
        // debugger;
        return (
            
            <div className="show-container">
                <div className="video-container">
                    <video className="show-video" width="100%" height="650px" src={`${this.props.video.videoUrl}`} controls>
                </video>
                </div>
                <div className="things-bottom-of-video">
                    <div className="show-information">
                        <div className="title-container">
                            <div className="show-title">{this.props.video.title}</div>
                            <div className="show-viewcount">{this.props.video.view_count}</div>
                            <div className="show-viewcount">{this.props.video.date_created}</div>
                            <LikesandDislikes
                                id={this.props.video.id}
                                update={this.props.update}
                                user={this.props.user}
                                likes={this.props.video.likes}
                                dislikes={this.props.video.dislikes}
                                currentUserId={this.props.currentUserId}
                                video={this.props.video} />
                            {/* <Dislikes 
                        id={this.props.video.id}
                        update={this.props.update}
                        likes={this.props.video.likes}
                        dislikes={this.props.video.dislikes}
                        currentUserId={this.props.currentUserId}
                        video={this.props.video} /> */}
                        </div>

                        {/* <div>
                    <div className="show-likes" onClick={this.handleClick}>Likes: {this.props.video.likes.length}</div>
                </div> */}


                        <div className="description-container">
                            {/* <div className="description-title">Description:</div> */}
                            <div className="video-creator">{this.props.video.creator}</div>
                            <div className="show-description">{this.props.video.description}</div>
                        </div>
                        <div className="review-container">
                            <Reviews
                                id={this.props.video.id}
                                update={this.props.update}
                                requestAVideo={this.props.requestAVideo}
                                reviews={this.props.video.reviews}
                                user={this.props.user}
                                currentUserId={this.props.currentUserId}
                                video={this.props.video}
                                username={this.props.username}
                            />
                        </div>


                    </div>
                    <div className="show-playlist-container">
                        <Playlist />

                    </div>
                </div>
                

                
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
            </div>
        )
    }
}