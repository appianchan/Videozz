import React from 'react'
import { Link, Route } from 'react-router-dom';
// import VideoShowContainer from './video_show_container';


export default class Search extends React.Component {
    constructor(props){
        
        super(props);
        
        if (this.props.location.state !== undefined){
            this.state = {
                search: this.props.location.state.search,
                message: "Other Videos For You"
            }
            this.setSearch(this.props.location.state.search)
        } else {
            this.state = {
                search: localStorage.getItem('Search'),
                message: "Other Videos For You"
            }
            // this.forceUpdate();
        }
        
        
        this.setSearch = this.setSearch.bind(this);
    }

    componentDidMount() {
        this.props.requestAllVideos();
    }

    componentDidUpdate(){
        
        if (this.state.search !== localStorage.getItem('Search')){
            this.setState({ search: localStorage.getItem('Search')})
        }
    }

    setSearch(option){
        localStorage.setItem('Search', option);
    }
    
   
    render() {

        const wow = [];
        const others = [];
        this.props.videos.forEach(video => {
            if (video.title.length > this.state.search.length){
                debugger;
                for(let i = 0; i <= (video.title.length - this.state.search.length); i++){
                    const x = video.title.substring(i, i + this.state.search.length).toLowerCase();
                    const y = this.state.search.toLowerCase();
                    
                    if((y !== "") && x === y && !wow.includes(video)){
                        wow.push(video);
                        break;
                    }
                }
            

            }

            if (video.title.toLowerCase() === this.state.search.toLowerCase()){
                wow.push(video);
            }
            
            
        })

        this.props.videos.forEach(video => {
            if (video.creator.length > this.state.search.length) {
                for (let i = 0; i <= (video.creator.length - this.state.search.length); i++) {
                    const x = video.creator.substring(i, i + this.state.search.length);
                    if (x !== "" && x.toLowerCase() === this.state.search.toLowerCase() && !wow.includes(video)) {
                        wow.push(video);
                        break;
                    }
                }


            }
            if (video.creator.toLowerCase() === this.state.search.toLowerCase()) {
                wow.push(video);
            }


        })



        this.props.videos.forEach(video => {
            if (!wow.includes(video)) {
                others.push(video);
            }
        })
        
        
        const final = wow.map(video =>
            <li className="video-search-element-container" key={video.id}>
                <Link
                    className="thumbnail-search"
                    to={`/videos/${video.id}`}
                    key={video.id}
                >
                    <video className="thumbnail-search" src={`${video.videoUrl}`}></video>
                </Link>


                <Link
                    className="video-link"
                    to={`/videos/${video.id}`}
                    key={video.id}
                >
                    <div className="search-video-info">
                        <div className="video-search-title">{video.title}</div>
                        <div className="video-search-middle-element">
                            <div className="video-search-creator">{video.creator} ·</div>
                            <div className="video-search-viewcount">{video.view_count} views ·</div>
                            <div className="video-search-datecreated">{video.date_created}</div>
                        </div>
                        <div className="video-search-description">{video.description}</div>

                    </div>

                </Link>
            </li>
        )
       

        

        const final2 = others.map(video =>
            <li className="video-search-element-container" key={video.id}>
                <Link
                    className="thumbnail-search"
                    to={`/videos/${video.id}`}
                    key={video.id}
                >
                    <video className="thumbnail-search" src={`${video.videoUrl}`}></video>
                </Link>


                <Link
                    className="video-link"
                    to={`/videos/${video.id}`}
                    key={video.id}
                >
                    <div className="search-video-info">
                        <div className="video-search-title">{video.title}</div>
                        <div className="video-search-middle-element">
                            <div className="video-search-creator">{video.creator} ·</div>
                            <div className="video-search-viewcount">{video.view_count} views ·</div>
                            <div className="video-search-datecreated">{video.date_created}</div>
                        </div>
                        <div className="video-search-description">{video.description}</div>

                    </div>

                </Link>
            </li>
        )
        if(wow.length === 0){
            this.state.message = "No Videos Matches Your Search"
        }
        if (wow.length > 0) {
            this.state.message = "Other Videos For You"
        }

       
        if (this.props.videos[0] === undefined) {
            return null;
        }
        
        return (
            <div className="search-page">
                <section className="search-videos">
                    {/* <img src={`${this.props.videos[0].videoUrl}`} /> */}
                    <ul className="video-search-list">
                        {/* <img className="thumbnail" src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg" /> */}
                        {final}
                        
                    </ul>

                    <p 
                    className="search-second-section-title" 
                    // hidden={final2.length === 0 ? "true" : ""}
                    >
                        {this.state.message}
                        </p>



                    <ul className="video-search-list">
                        {/* <img className="thumbnail" src="https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg" /> */}
                        {final2}
                    </ul>
                    
                </section>
            </div>
        )
    }
}