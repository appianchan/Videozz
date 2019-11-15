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

export const updateVideo = video => (
    $.ajax({
        method: 'PATCH',
        url: `api/videos/${video.id}`,
        data: {video}
    })
);