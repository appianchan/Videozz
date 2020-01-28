class Video < ApplicationRecord 
    validates :description, :title, presence: true
    validate :reviews
    validate :ensure_video

    belongs_to :user
    has_many :likes
    has_many :dislikes
    has_many :reviews
    has_one_attached :video_attatchment

    def ensure_video
        unless self.video_attatchment.attached?
            errors[:video] << "Must be attached"
        end
    end
end