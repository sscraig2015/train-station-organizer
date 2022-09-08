class TrainsController < ApplicationController

    skip_before_action :authorize
    
    def index
        render json: Train.all.order(:number), status: :ok
    end

    def show
        train = find_train
        render json: train, status: :ok
    end

    def create
        newTrain = Train.create!(permit_params)
        render json: newTrain, status: :created
    end



    private

    def find_train
        Train.find(params[:id])
    end

    def permit_params
        params.permit(:number, :section)
    end
end
