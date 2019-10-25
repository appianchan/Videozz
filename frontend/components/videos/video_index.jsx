import React from 'react'
import { Link, Route } from 'react-router-dom';
import VideoShowContainer from './video_show_container'

export default class VideoIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllVideos();
    }

    render() {
        // debugger;
        const videos = this.props.videos.map(video =>
            // video.title
            // <video>
            //     <source src={`${video.videlUrl}`}/>
            // </video>
            <Link to={`/videos/${video.id}`} key={video.id}> {video.title} </Link>
            
        );


        return (

            <section className="videos">
                <ul>
                    <img src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg"/>
                    {videos}
                </ul>

            </section>
        )
    }
}