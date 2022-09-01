class TrainsController < ApplicationController

    skip_before_action :authorize
    def index
        render json: Train.all.order(:number), status: :ok
    end

    def show
        train = find_train
        render json: train, include: ['tickets', 'tickets.user'], status: :ok
    end

    def create
        newTrain = Train.create!(permit_params)
        render json: newTrain, status: :created
    end

    def update
        train = find_train
        train.update(permit_params)
        render json: train, status: :ok
    end

    def destroy
        train = find_train
        train.destroy
        head :no_content
    end


    private

    def find_train
        @selectedTrain = Train.find(params[:id])
    end

    def permit_params
        params.permit(:number, :section)
    end
end
