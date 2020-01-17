export const fetchVideos = () => (
    $.ajax({
        method: 'GET',
        url: 'api/videos',
    })
);

export const fetchVideo = id => (
    $.ajax({
        method: 'GET',
        url: `api/videos/${id}`
    })
);

export const updateVideo = video => {
    debugger
    return (
    $.ajax({
        method: 'PUT',
        url: `/api/videos/${video.id}`,
        data: { video }
    }))
};