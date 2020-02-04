import React from 'react';
import LikesandDislikes from './likes';
import Reviews from './reviews/reviews_container';
// import Dislikes from './dislikes';
import Playlist from './video_show_components/playlist_container'

export default class VideoShow extends React.Component {

    constructor(props){
        super(props);
        // debugger;
        this.state = {
            title: this.props.video || []
        };
        this.updateReviews = this.updateReviews.bind(this);
    }
    updateReviews(video){  
        this.props.update(video);
        debugger;
    }
    componentDidMount() {
        const videoId = this.props.videoId;
        this.props.requestAVideo(videoId);
        // if (this.props.video) {
        //     this.props.update(this.props.video);
        // }
        // this.props.update(this.props.video);
    }

    // componentDidUpdate(prevProps) {
    //     const videoId = this.props.videoId;
    //     debugger;
    //     if (prevProps.video.id != videoId) {
    //         this.props.requestAVideo(videoId);
    //     }
    // }
    

    render() {
        // debugger;
        const video = this.props.video;
        if (!video) {
            return null;
        } 
        // debugger;
        return (
            
            <div className="show-container">
                <div className="video-left">
                    <div className="video-container">
                        <video className="show-video" width="100%" height="650px" src={`${this.props.video.videoUrl}`} controls>
                        </video>
                    </div>
                    <div className="things-bottom-of-video">
                        <div className="show-information">
                            <div className="title-container">
                                <div className="show-title">{this.props.video.title}</div>
                                <div className="title-bottom-bar">
                                    <div className="video-show-info">
                                        <div className="show-viewcount">{this.props.video.view_count} views ·</div>
                                        <div className="show-viewcount-date">{this.props.video.date_created}</div>
                                    </div>
                                    <div className="title-bottom-bar-right">
                                        <LikesandDislikes
                                            id={this.props.video.id}
                                            update={this.props.update}
                                            user={this.props.user}
                                            likes={this.props.video.likes}
                                            dislikes={this.props.video.dislikes}
                                            currentUserId={this.props.currentUserId}
                                            video={this.props.video} />
                                        <div className="share">
                                            <i class="fas fa-share"></i>
                                            <div className="share-text">SHARE</div>
                                        </div>
                                        <div className="save">
                                            <i class="far fa-save"></i>
                                            <div className="save-text">SAVE</div>
                                        </div>

                                        <i class="fas fa-ellipsis-h"></i>

                                    </div>
                                </div>
                            </div>

                            {/* <div>
                    <div className="show-likes" onClick={this.handleClick}>Likes: {this.props.video.likes.length}</div>
                </div> */}


                            <div className="description-container">
                                {/* <div className="description-title">Description:</div> */}
                                <div><i class="fas fa-user-circle"></i></div>
                                <div className="description-info">
                                    <div className="video-creator">{this.props.video.creator}</div>
                                    <div className="show-description">{this.props.video.description}</div>
                                </div>

                            </div>
                            <div className="review-container">
                                <Reviews
                                    video_id={this.props.video.id}
                                    creator={this.props.video.creator}
                                />
                            </div>


                        </div>

                    </div>
                </div>
                
                <div className="show-playlist-container">
                    <Playlist />

                </div>
                

                
                
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
            </div>
        )
    }
}