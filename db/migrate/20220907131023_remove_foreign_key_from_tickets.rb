class RemoveForeignKeyFromTickets < ActiveRecord::Migration[7.0]
  def change
    remove_foreign_key :tickets, :passengers
  end
end
