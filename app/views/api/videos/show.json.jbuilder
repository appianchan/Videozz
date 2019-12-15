json.extract! @video, 
    :id, :title, :description, :user_id, :likes, :dislikes
    json.videoUrl url_for(@video.video_attatchment)