class CreateDislikes < ActiveRecord::Migration[5.2]
  def change
    create_table :dislikes do |t|
      t.integer :dislikes_number, :default => 0
      t.integer :video_id, null: false
      t.timestamps
    end
  end
end
