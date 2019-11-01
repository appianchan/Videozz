import { connect } from 'react-redux';
import React from 'react';
import { fetchVideo } from '../../actions/video_actions';
import { selectAVideo } from '../../reducers/selectors';
import VideoShow from './video_show';



export const mapStateToProps = (state, ownProps) => {
    // debugger;
    const videoId = ownProps.match.params['videoId'];
    const currentUserId = state.session.id;
    return ({
        video: selectAVideo(state, videoId),
        videoId: videoId,
        currentUserId: currentUserId
    })
}

export const mapDispatchToProps = dispatch => ({
    requestAVideo: (videoId) => dispatch(fetchVideo(videoId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoShow);