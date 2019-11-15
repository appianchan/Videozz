class AddReviewsToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :reviews, :text, array: true, default: []
  end
end
