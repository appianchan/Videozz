import { connect } from 'react-redux';
import React from 'react';
import { fetchVideos } from '../../../actions/video_actions';
import { selectAllVideos } from '../../../reducers/selectors';
import Upload from './upload';



export const mapStateToProps = state => {

    const errors = state.errors.session;
    state.errors.session = null;
    const currentUserId = state.session.id;
    if (currentUserId !== undefined) {
        var user = state.entities.users[currentUserId].username;
    }
    return ({
        currentUserId: currentUserId,
        user: user || "",
        errors: errors
    })

};

export const mapDispatchToProps = dispatch => ({
    requestAllVideos: () => dispatch(fetchVideos())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Upload);