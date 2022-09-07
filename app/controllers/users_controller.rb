class UsersController < ApplicationController

    skip_before_action :authorize, only: :create
    
    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def show
      render json: @current_user, include: ['tickets', 'tickets.train']
    end

    private
  
    def user_params
      params.permit(:username, :password, :password_confirmation)
    end
end
