class RenameTicketsTrainsIdColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :tickets, :trains_id, :train_id
  end
end
