class AddPassengerToTicket < ActiveRecord::Migration[7.0]
  def change
    add_column :tickets, :passenger_name, :string
  end
end
