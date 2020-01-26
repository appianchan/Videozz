class AddVideoIdToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :video_id, :integer
  end
end
