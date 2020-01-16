import React from 'react'
import { Link, Route } from 'react-router-dom';
// import VideoShowContainer from './video_show_container';
// import VideoIndexNavbar from '../video_index_navbar';


export default class VideoIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllVideos();
    }

    upload(e) {
        e.preventDefault();
        if (this.props.user === "") {
            this.props.history.push("/login")
        } else {
            this.props.history.push("/upload")
        }
    }

    render() {


        const videos = this.props.videos.map(video =>

            // console.log(video)
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
                    <i class="fas fa-user-circle"></i>
                    <div className="index-video-info">
                        <div className="video-index-title">{video.title} </div>
                        <div className="video-index-creator">{video.creator}</div>
                        <div className="video-index-bottom-element">
                            <div className="video-index-viewcount">{video.view_count} views ·</div>
                            <div className="video-index-datecreated">{video.date_created}</div>
                        </div>

                    </div>

                </Link>
            </li>



        );
        if (this.props.videos[0] === undefined) {
            return null;
        }
        // debugger;
        // const holder = videos.forEach(video =>
        //         {video.title}
        //     );
        return (
            <div className="index-page">



                <section className="videos">
                    <div className="index-top-bar">
                        <div className="recommended">Recommended</div>
                        <div className="" onClick={this.upload.bind(this)}>
                            Upload A Video
                        </div>
                    </div>

                    {/* <img src={`${this.props.videos[0].videoUrl}`} /> */}
                    <ul className="video-index-list">
                        {/* <img className="thumbnail" src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg" /> */}
                        {videos}
                    </ul>

                </section>
            </div>
        )
    }
}