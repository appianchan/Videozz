import * as APIUtil from "../util/dislike_util";

export const RECEIVE_DISLIKES = 'RECEIVE_DISLIKES';

export const receiveDislikes = dislikes => ({
    type: RECEIVE_DISLIKES,
    dislikes,
});

export const fetchDislikes = () => dispatch => (
    APIUtil.fetchDislikes().then(dislikes => (
        dispatch(receiveDislikes(dislikes))
    ))
);
