import React from 'react'

export default class VideoShow extends React.Component {

    componentDidMount() {
        const videoId = this.props.videoId;
        this.props.requestAVideo(videoId);
    }

    render() {
        
        debugger;
        return (

            <div>
                {this.props.video.title}
                {this.props.video.description}
                
            </div>
        )
    }
}