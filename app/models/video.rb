class Video < ApplicationRecord 
    validates :description, :title, presence: true
    # validates :title, uniqueness: true, presence: true
    validate :ensure_video

    belongs_to :user
    has_one_attached :video_attatchment

    def ensure_video
        unless self.video_attatchment.attached?
            errors[:video] << "Must be attached"
        end
    end
end