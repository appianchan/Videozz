import { connect } from 'react-redux';
import React from 'react';
import { fetchVideos } from '../../actions/video_actions';
import { selectAllVideos } from '../../reducers/selectors';
import Search from './search';



export const mapStateToProps = state => ({
    videos: selectAllVideos(state)
});

export const mapDispatchToProps = dispatch => ({
    requestAllVideos: () => dispatch(fetchVideos())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);