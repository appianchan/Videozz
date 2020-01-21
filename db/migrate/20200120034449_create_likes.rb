class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :likes_number, :default => 0
      t.integer :video_id, null: false
      t.timestamps
    end
  end
end
