class Api::LikesController < ApplicationController
  def index
    @likes = Like.all 
    render :index
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render json: {message: "you liked!"}
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Like.find_by(id: params[:id])
    @like.destroy 
  end

  private
  def like_params
    params.require(:like).permit(:video_id, :user_id)
  end

end