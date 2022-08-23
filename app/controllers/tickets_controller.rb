class TicketsController < ApplicationController

    def index
        render json: Ticket.all
    end

    def show
        ticket = find_ticket
        render json: ticket, status: :ok
    end

    def create
        newTicket = Ticket.create!(permit_params)
        
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
        return Ticket.find(params[:id])
    end

    def permit_params
        params.permit(:price, :passenger_id, :train_id)
    end
end
