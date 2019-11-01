class AddLikesToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users,  :likes, :integer
  end
end
