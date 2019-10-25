import * as APIUtil from "../util/video_api_util";

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

export const receiveVideos = videos => ({
    type: RECEIVE_VIDEOS,
    videos,
});

export const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video,
});

export const fetchVideos = () => dispatch => (
    APIUtil.fetchVideos().then(videos => (
        dispatch(receiveVideos(videos))
    ))
);

export const fetchVideo = id => dispatch => (
    APIUtil.fetchVideo(id).then(video => (
        dispatch(receiveVideo(video))
    ))
);

