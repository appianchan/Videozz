class Api::SessionsController < ApplicationController
    def create
        user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if user     
            login(user)
            
            render json: {id: user.id, username: user.username}
        else
            render json: ["Invalid username/password combination"], status:404
        end
    end

    def destroy
        @user = current_user
        
        if @user
           logout 
           render json: [1,2,3];
        else
            render json: ['Nobody is signed in'], status:404
        end
    end
end