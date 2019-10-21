import React from 'react'
import { Link, Route } from 'react-router-dom';

export default class VideoIndex extends React.Component {

    componentDidMount() {
        this.props.requestAllVideos();
    }

    render() {
        debugger;
        const videos = this.props.videos.map(video =>
            video.title
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