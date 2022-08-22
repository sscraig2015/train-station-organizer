class CreateTickets < ActiveRecord::Migration[7.0]
  def change
    create_table :tickets do |t|
      t.integer :price
      t.references :passenger, null: false, foreign_key: true
      t.references :trains, null: false, foreign_key: true

      t.timestamps
    end
  end
end
