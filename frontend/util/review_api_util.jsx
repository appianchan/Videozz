export const fetchReviews = id => (
    $.ajax({
        method: 'GET',
        url: 'api/reviews',
    })
);

export const fetchReview = id => (
    $.ajax({
        method: 'GET',
        url: `api/videos/${id}`
    })
);