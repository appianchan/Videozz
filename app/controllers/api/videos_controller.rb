class Api::VideosController < ApplicationController
  def index
    @videos = Video.all 
    render :index
  end

  def show
    @video = Video.find_by(id: params[:id])
    render :show
  end

  def update
    @video = Video.find_by(id: params[:id])
  
    if @video.update(video_params)
      render :show
    end
  end

  private
  def video_params
    params.require(:video).permit(:likes, :dislikes)
  end


end
