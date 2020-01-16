import { connect } from 'react-redux';
import React from 'react';
import { fetchVideos } from '../../../actions/video_actions';
import { selectAllVideos } from '../../../reducers/selectors';
import Upload from './upload';



export const mapStateToProps = state => {

    const currentUserId = state.session.id;
    // const username = state.entities.users[currentUserId].username;
    if (currentUserId !== undefined) {
        var user = state.entities.users[currentUserId].username;
    }
    return ({
        currentUserId: currentUserId,
        user: user || ""
    })

};

export const mapDispatchToProps = dispatch => ({
    requestAllVideos: () => dispatch(fetchVideos())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Upload);