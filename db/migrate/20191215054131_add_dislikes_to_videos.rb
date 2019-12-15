class AddDislikesToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos,  :dislikes, :text, array: true, default: []
  end
end
