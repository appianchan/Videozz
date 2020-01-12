import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute } from '../util/route_util';
import VideoIndexContainer from "./videos/video_index_container";
import Navbar from "./Navbar";
import VideoShowContainer from "./videos/video_show_container";
import VideoIndexNavBar from "./video_index_navbar";

// import logo from '/Users/anthonychan/Desktop/Fullstack Project/app/assets/stylesheets/YouTube-618x350.jpg';

const App = () => (
    <div className="base-page">
        
        <Navbar />
        <div className="base-page-layout">
            <VideoIndexNavBar />

            <Switch>
                    <Route exact path="/" component={VideoIndexContainer } />
                    <Route exact path="/videos/:videoId" component={VideoShowContainer} />
                    {/* <Route exact path="/search" component={SearchContainer} /> */}
                    <AuthRoute path="/login" component={LoginFormContainer} />
                    <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>
        </div>
        
    </div>
);

export default App;