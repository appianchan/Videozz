json.extract! @video, 
    :id, :title, :description, :user_id, :likes
    json.videoUrl url_for(@video.video_attatchment)