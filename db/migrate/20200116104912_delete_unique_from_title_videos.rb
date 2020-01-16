class DeleteUniqueFromTitleVideos < ActiveRecord::Migration[5.2]
  def change
    remove_index :videos, :title
    add_index :videos, :title
  end
end
