export const selectAllVideos = ({ entities: { videos } }) => {
    return (
        Object.values(videos)
    )
}