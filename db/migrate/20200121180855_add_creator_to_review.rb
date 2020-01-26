class AddCreatorToReview < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :creator, :text
  end
end
