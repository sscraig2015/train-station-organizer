class ApplicationController < ActionController::API

    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    before_action :authorize

    

    private

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

    def not_found()
        render json: { errors: ["User not found." ]}, status: :unprocessable_entity
    end

end
