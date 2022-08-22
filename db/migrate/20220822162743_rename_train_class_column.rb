class RenameTrainClassColumn < ActiveRecord::Migration[7.0]
  def change
    rename_column :trains, :class, :train_class
  end
end
