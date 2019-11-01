class AddLikesToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos,  :likes, :text, array: true, default: []
  end
end
