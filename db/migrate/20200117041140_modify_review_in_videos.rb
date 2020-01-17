class ModifyReviewInVideos < ActiveRecord::Migration[5.2]
  def change
    remove_column :videos, :reviews
    remove_column :videos, :subscribers
    add_column :videos, :reviews, :string
  end
end
