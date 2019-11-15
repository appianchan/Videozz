class ReviewsController < ApplicationController
  def index
    @reviews = Review.all 
    render :index
  end

  def update
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params)
      render :show
    end
  end

  private
  def review_params
    params.require(:review).permit(:body)
  end

end
