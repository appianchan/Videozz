export const selectAllVideos = ({ entities: { videos } }) => {
    return (
        Object.values(videos)
    )
}

export const selectAVideo = (state, videoId) => {
    // debugger;
    return (
        state.entities.videos[`${videoId}`]
    )
}