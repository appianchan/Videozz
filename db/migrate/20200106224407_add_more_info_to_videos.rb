class AddMoreInfoToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :subscribers, :text, array: true, default: []
    add_column :videos, :date_created, :string
  end
end
