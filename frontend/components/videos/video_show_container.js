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
    // const username = state.entities.users[currentUserId].username;
    if(currentUserId !== undefined){
        var user = state.entities.users[17].username;
    }
    
    
    return ({
        video: selectAVideo(state, videoId),
        videoId: videoId,
        currentUserId: currentUserId,
        user: user || ""
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