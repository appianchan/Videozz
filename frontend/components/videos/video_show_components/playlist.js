import React from 'react'
import { Link, Route } from 'react-router-dom';


export default class Playlist extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.requestAllVideos();
    }

    render() {


        const videos = this.props.videos.map(video =>

            // console.log(video)
            <li className="playlist-video-index-element-container" key={video.id}>
                <Link
                    className="playlist-thumbnail"
                    to={`/videos/${video.id}`}
                    key={video.id}
                >
                    <video className="playlist-thumbnail" src={`${video.videoUrl}`}></video>
                </Link>


                <Link
                    className="playlist-video-link"
                    to={`/videos/${video.id}`}
                    key={video.id}
                >
                    
                    <div className="playlist-index-video-info">
                        <div className="playlist-video-index-title">{video.title} </div>
                        <div className="playlist-video-index-bottom-element">
                            <div className="playlist-video-index-creator">{video.creator} ·</div>
                            <div className="playlist-video-index-viewcount">{video.view_count} views</div>
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
            <div className="playlist">
                


                <section className="playlist-videos">
                    <div className="up-next">Up next</div>
                    {/* <img src={`${this.props.videos[0].videoUrl}`} /> */}
                    <ul className="playlist-video-index-list">
                        {videos}
                    </ul>

                </section>
            </div>
        )
    }
}