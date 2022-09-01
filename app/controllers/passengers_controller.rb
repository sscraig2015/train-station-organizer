class PassengersController < ApplicationController

    
    def show
        passenger = find_passenger
        render json: passenger, include: ['tickets', 'tickets.train'], status: :ok
    end

    def create
        newPass = Passenger.find_or_create_by!(permit_params)
        render json: newPass, status: :created
    end

    def destroy
        passenger = find_passenger
        passenger.destroy
        head :no_content
    end


    private

    def find_passenger
        return Passenger.find_by!(name: params[:id])
    end

    def permit_params
        params.permit(:name)
    end
end
