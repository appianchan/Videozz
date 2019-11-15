class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :user_id, null: false
      t.text :body
      t.timestamps 
    end
  end
end
