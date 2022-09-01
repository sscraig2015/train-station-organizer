class AddDestinationAndArrivalToTrains < ActiveRecord::Migration[7.0]
  def change
    add_column :trains, :arrival, :string
    add_column :trains, :departure, :string

  end
end
