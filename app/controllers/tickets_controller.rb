class TicketsController < ApplicationController

    

    def create
        user = User.find_by(id: session[:user_id])
        newTicket = user.tickets.create!(permit_params)
        render json: newTicket, status: :created
    end

    def update
        ticket = find_ticket
        ticket.update(permit_params)
        render json: ticket, status: :ok
    end

    def destroy
        ticket = find_ticket
        ticket.destroy
        head :no_content
    end


    private

    def find_ticket
        user = User.find_by(id: session[:user_id])
        user.tickets.find_by(id: params[:id])
    end

    def permit_params
        params.permit(:price, :train_id, :passenger_name, :id)
    end
end
