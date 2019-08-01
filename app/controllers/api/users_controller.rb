class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            #redirect_to root_url
            render json: {id: @user.id, username: @user.username}
        else
            p "My errors here"; 
            render json: @user.errors.full_messages, status: 422
            # flash.now[:errors] = @user.errors.full_messages
            # render :new
        end
    end

    private 
    def user_params 
        params.require(:user).permit(:username, :password)
    end
end
