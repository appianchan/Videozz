class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :user_id, null: false
      t.integer :view_count, null: false
    end
    add_index :videos, :title,  unique: true
    add_index :videos, :user_id,  unique: true
  end
end
