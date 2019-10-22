import React from 'react'
import { Link, Route } from 'react-router-dom';
import VideoShowContainer from './video_show_container'

export default class VideoIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllVideos();
    }

    render() {
        const videos = this.props.videos.map(video =>
            // video.title
            <Link to={`/videos/${video.id}`} key={video.id}> {video.title} </Link>
            
        );


        return (

            <section className="videos">
                <ul>
                    {videos}
                </ul>

            </section>
        )
    }
}