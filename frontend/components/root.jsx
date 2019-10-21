import { HashRouter } from 'react-router-dom';
import App from './App';
import { Provider } from "react-redux";
import React from "react";
import VideoIndexContainer from "./videos/video_index_container"
import { Link, Route } from 'react-router-dom';



const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            {/* <App /> */}
            <Route path="/" component={VideoIndexContainer} />
        </HashRouter>
    </Provider>
);

export default Root;