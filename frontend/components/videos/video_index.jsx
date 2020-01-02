import React from 'react'
import { Link, Route } from 'react-router-dom';
import VideoShowContainer from './video_show_container';


export default class VideoIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllVideos();
    }

    render() {
        

        const videos = this.props.videos.map(video =>
            // video.title
            // <video>
            //     <source src={`${video.videlUrl}`}/>
            // </video>
            <li className="video-index-element-container" key={video.id}>
                <Link
                    className="thumbnail"
                    to={`/videos/${video.id}`}
                    key={video.id}
                >
                    <video className="thumbnail" src={`${video.videoUrl}`}></video>
                </Link>


                <Link 
                className="video-link" 
                to={`/videos/${video.id}`} 
                key={video.id}
                > 
                {video.title} 
                </Link>
            </li>
            
        

        );
        if (this.props.videos[0] === undefined) {
            return null;
        }
        // debugger;
            const holder = videos.forEach(video =>
                    {video.title}
                );
        return (
            
            <section className="videos">
                
                {/* <img src={`${this.props.videos[0].videoUrl}`} /> */}
                <ul className="video-index-list">
                    {/* <img className="thumbnail" src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg" /> */}
                    {videos}
                </ul>

            </section>
        )
    }
}