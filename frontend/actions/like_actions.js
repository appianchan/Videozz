import * as APIUtil from "../util/like_util";

export const RECEIVE_LIKES = 'RECEIVE_LIKES';

export const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes,
});

export const fetchLikes = () => dispatch => (
    APIUtil.fetchLikes().then(likes => (
        dispatch(receiveLikes(likes))
    ))
);
