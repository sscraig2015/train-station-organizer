class ChangePassengerToUserInTickets < ActiveRecord::Migration[7.0]
  def change
    rename_column :tickets, :passenger_id, :user_id
  end
end
