import { connect } from 'react-redux';
import React from 'react';
import { fetchVideo } from '../../actions/video_actions';
import { updateVideo } from '../../actions/video_actions';
import { selectAVideo } from '../../reducers/selectors';
import VideoShow from './video_show';



export const mapStateToProps = (state, ownProps) => {
    // debugger;
    const videoId = ownProps.match.params['videoId'];
    const currentUserId = state.session.id;
    // debugger;
    const username = state.entities.users[currentUserId].username;
    // if(currentUserId !== undefined){
    //     debugger;
    //     const username = state.session.entities[currentUserId].username;
    // }
    
    
    return ({
        video: selectAVideo(state, videoId),
        videoId: videoId,
        currentUserId: currentUserId,
        username: username
    })
}

export const mapDispatchToProps = dispatch => ({
    requestAVideo: (videoId) => dispatch(fetchVideo(videoId)),
    update: video => dispatch(updateVideo(video))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoShow);