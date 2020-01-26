class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all 
    render :index
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: {message: "you reviewed!"}
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params)
      render :show
    end
  end

  private
  def review_params
    params.require(:review).permit(:body, :video_id, :user_id, :creator)
  end

end
