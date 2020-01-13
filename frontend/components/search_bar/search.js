import React from 'react'
import { Link, Route } from 'react-router-dom';
// import VideoShowContainer from './video_show_container';


export default class Search extends React.Component {
    constructor(props){
        super(props);
        // debugger;
        this.state = {
            search: this.props.location.state.search || ""
            // search_result: []
        }
    }

    componentDidMount() {
        this.props.requestAllVideos();
    }
   
    render() {
        const wow = [];
        this.props.videos.forEach(video => {
            if (video.title.length > this.state.search.length){
                for(let i = 0; i <= (video.title.length - this.state.search.length); i++){
                    const x = video.title.substring(i, i + this.state.search.length);
                    if(x === this.state.search && !wow.includes(video)){
                        wow.push(video);
                        break;
                    }
                }
            

            }
            if (video.title === this.state.search){
                wow.push(video);
            }
            
            
        })

        this.props.videos.forEach(video => {
            if (video.creator.length > this.state.search.length) {
                for (let i = 0; i <= (video.creator.length - this.state.search.length); i++) {
                    const x = video.creator.substring(i, i + this.state.search.length);
                    if (x === this.state.search && !wow.includes(video)) {
                        wow.push(video);
                        break;
                    }
                }


            }
            if (video.creator === this.state.search) {
                wow.push(video);
            }


        })
        
        
        const final = wow.map(video =>
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
        )
        

        // const videos = this.props.videos.map(video =>

        //     // console.log(video)
        //     <li className="video-index-element-container" key={video.id}>
        //         <Link
        //             className="thumbnail"
        //             to={`/videos/${video.id}`}
        //             key={video.id}
        //         >
        //             <video className="thumbnail" src={`${video.videoUrl}`}></video>
        //         </Link>


        //         <Link
        //             className="video-link"
        //             to={`/videos/${video.id}`}
        //             key={video.id}
        //         >
        //             <i class="fas fa-user-circle"></i>
        //             <div className="index-video-info">
        //                 <div className="video-index-title">{video.title} </div>
        //                 <div className="video-index-creator">{video.creator}</div>
        //                 <div className="video-index-bottom-element">
        //                     <div className="video-index-viewcount">{video.view_count} views ·</div>
        //                     <div className="video-index-datecreated">{video.date_created}</div>
        //                 </div>

        //             </div>

        //         </Link>
        //     </li>



        // );
        if (this.props.videos[0] === undefined) {
            return null;
        }
        
        return (
            <div className="index-page">



                <section className="videos">
                    <div className="recommended">Recommended</div>
                    {/* <img src={`${this.props.videos[0].videoUrl}`} /> */}
                    <ul className="video-index-list">
                        {/* <img className="thumbnail" src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg" /> */}
                        {final}
                    </ul>

                </section>
            </div>
        )
    }
}