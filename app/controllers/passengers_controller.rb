class PassengersController < ApplicationController

    def index
        render json: Passenger.all
    end

    def show
        passenger = find_passenger
        render json: passenger, status: :ok
    end

    def create
        newPass = Passenger.create!(permit_params)
        render json: newPass, status: :created
    end

    def update
        passenger = find_passenger
        passenger.update(permit_params)
        render json: passenger, status: :ok
    end

    def destroy
        passenger = find_passenger
        passenger.destroy
        head :no_content
    end


    private

    def find_passenger
        return Passenger.find(params[:id])
    end

    def permit_params
        params.permit(:name)
    end
end
