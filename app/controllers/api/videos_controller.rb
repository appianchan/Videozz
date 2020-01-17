class Api::VideosController < ApplicationController
  def index
    @videos = Video.all 
    render :index
  end

  def create
    @video = Video.new(video_params)
    if @video.save
      render json: {message: "you uploaded!"}
    else
      render json: @video.errors.full_messages, status: 422
    end
  end


  def show
    @video = Video.find_by(id: params[:id])
    render :show
  end

  def update
    @video = Video.find_by(id: params[:id])
    # debugger
    if @video.update(video_params)
      # debugger
      render :show
    end
  end

  private
  def video_params
    # params.require(:video).permit(:reviews => [:id])
    params.require(:video).permit(:title, :description, :creator, :date_created, :likes, :video_attatchment, :view_count, :user_id, :reviews => [:id])
  end


end
