class AddUserIdToLikesAndDislikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :user_id, :integer
    add_column :dislikes, :user_id, :integer
    remove_column :likes, :likes_number
    remove_column :dislikes, :dislikes_number
  end

end
