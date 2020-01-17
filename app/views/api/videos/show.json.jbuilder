json.extract! @video, 
    :id, :title, :description, :user_id, :likes, :dislikes, :view_count, :creator, :date_created, :reviews
    json.videoUrl url_for(@video.video_attatchment)