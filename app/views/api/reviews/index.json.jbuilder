@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :user_id, :body
    end
end