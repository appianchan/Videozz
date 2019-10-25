@videos.each do |video|
    json.set! video.id do
        json.extract! video, :id, :title, :description, :user_id
        json.videoUrl url_for(video.video_attatchment)
    end
end