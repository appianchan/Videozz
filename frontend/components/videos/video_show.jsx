import React from 'react';

export default class VideoShow extends React.Component {

    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        const videoId = this.props.videoId;
        this.props.requestAVideo(videoId);
    }
    // handleClick(e) {
    //     e.preventDefault();
    //     debugger;
    //     if (this.state.likes.includes(this.props.currentUserId)){
    //         const index_item = this.state.likes.indexOf(this.props.currentUserId);
    //         const temp = this.props.video.likes
    //         this.props.video.likes = temp.slice(0, index_item) + temp.slice(index_item + 1, -1);
    //     } else{
    //         debugger;
    //         this.setState(state => ({
    //             likes: state.likes.push(this.props.currentUserId)
    //         }));
    //     }
    // }

    render() {
        const video = this.props.video;
        if (!video) {
            return null;
        }
        return (

            <div className="show-container">
                <div className="video-container">
                    <video className="show-video" width="1600px" height="700px" src={`${this.props.video.videoUrl}`} controls>
                </video>
                </div>
                <div className="title-container">
                    <div className="show-title">{this.props.video.title}</div>
                </div>
                {/* <div>
                    <div className="show-likes" onClick={this.handleClick}>Likes: {this.props.video.likes.length}</div>
                </div> */}
                
                <div className="description-container">
                    <div className="description-title">Description:</div>
                    
                    <div className="show-description">{this.props.video.description}</div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
            </div>
        )
    }
}