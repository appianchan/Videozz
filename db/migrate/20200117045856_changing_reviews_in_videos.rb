class ChangingReviewsInVideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :reviews
    add_column :videos, :reviews, :text, array: true
  end
end
