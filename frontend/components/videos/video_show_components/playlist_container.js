import { connect } from 'react-redux';
import React from 'react';
import { fetchVideos } from '../../../actions/video_actions';
import { selectAllVideos } from '../../../reducers/selectors';
import Playlist from './playlist';



export const mapStateToProps = state => ({
    videos: selectAllVideos(state)
});

export const mapDispatchToProps = dispatch => ({
    requestAllVideos: () => dispatch(fetchVideos())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Playlist);