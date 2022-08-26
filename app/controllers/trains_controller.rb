class TrainsController < ApplicationController

    def index
        render json: Train.all.order(:number)
    end

    def show
        train = find_train
        render json: train, status: :ok
    end

    def create
        newPass = Train.create!(permit_params)
        render json: newPass, status: :created
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
        return Train.find(params[:id])
    end

    def permit_params
        params.permit(:number, :section)
    end
end
