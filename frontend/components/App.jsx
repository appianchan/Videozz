import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import { AuthRoute } from '../util/route_util';
import VideoIndexContainer from "./videos/video_index_container";
import Navbar from "./Navbar";
import VideoShowContainer from "./videos/video_show_container";
import VideoIndexNavBar from "./video_index_navbar";
import SearchContainer from "./search_bar/search_container";
import UploadContainer from "./videos/upload_video/upload_container";

// import logo from '/Users/anthonychan/Desktop/Fullstack Project/app/assets/stylesheets/YouTube-618x350.jpg';




// const App = () => (
    
//     <div className="base-page">

//         <Navbar />
//         <div className="base-page-layout">
//             <VideoIndexNavBar />

//             <Switch>
//                 <Route exact path="/" component={VideoIndexContainer} />
//                 <Route exact path="/videos/:videoId" component={VideoShowContainer} />
//                 <Route exact path="/search" component={SearchContainer} />
//                 <AuthRoute path="/login" component={LoginFormContainer} />
//                 <AuthRoute path="/signup" component={SignupFormContainer} />
//             </Switch>
//         </div>

//     </div>

// )
// export default App;
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            DataFromSearchBar: ""
        }
        this.myCallback = this.myCallback.bind(this);
    }
    myCallback(dataFromSearchBar){
        this.setState({ DataFromSearchBar: dataFromSearchBar})
    }
    render(){
        if (this.state.DataFromSearchBar !== ""){
            <Redirect to="/search" />
        }
    return(
    <div className="base-page">

        <Navbar func={this.myCallback}/>
        <div className="base-page-layout">
            <VideoIndexNavBar />

            <Switch>
                <Route exact path="/" component={VideoIndexContainer} />
                <Route exact path="/videos/:videoId" component={VideoShowContainer} />
                <Route exact path="/search" component={SearchContainer} />
                <Route exact path="/upload" component={UploadContainer} />
                {/* <Route exact path="/search" render={() => <SearchContainer keyProp={"rawr"}  />} /> */}
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>
        </div>

    </div>
    )
    }

}

