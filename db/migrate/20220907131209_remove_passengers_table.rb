class RemovePassengersTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :passengers
  end
end
