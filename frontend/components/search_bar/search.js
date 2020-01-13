import React from 'react'
import { Link, Route } from 'react-router-dom';
// import VideoShowContainer from './video_show_container';


export default class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: this.props.location.state.search || ""
        }
        debugger;
    }

    componentDidMount() {
        this.props.requestAllVideos();
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
        const holder = videos.forEach(video => { video.title }
        );
        return (
            <div className="index-page">



                <section className="videos">
                    <div className="recommended">Recommended</div>
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