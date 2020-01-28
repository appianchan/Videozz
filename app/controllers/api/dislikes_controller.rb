class Api::DislikesController < ApplicationController
  def index
    @dislikes = Dislike.all
  end

  def create
    @dislike = Dislike.new(dislike_params)
    if @dislike.save
      render json: {message: "you disliked!"}
    else
      render json: @dislike.errors.full_messages, status: 422
    end
  end

  def destroy
    @dislike = Dislike.find_by(id: params[:id])
    @dislike.destroy 
  end

  private
  def dislike_params
    params.require(:dislike).permit(:video_id, :user_id)
  end

end