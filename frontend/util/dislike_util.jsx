export const fetchDislikes = id => (
    $.ajax({
        method: 'GET',
        url: 'api/dislikes',
    })
);

