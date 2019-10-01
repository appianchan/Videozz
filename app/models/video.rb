class Video < ApplicationRecord 
    validates :description, :view_count, presence: true
    validates :title, :user_id, uniqueness: true, presence: true

    belongs_to :user
    has_one_attached :video

end