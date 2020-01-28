export const fetchLikes = id => (
    $.ajax({
        method: 'GET',
        url: 'api/likes',
    })
);

