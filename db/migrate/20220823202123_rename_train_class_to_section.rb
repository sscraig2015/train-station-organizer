class RenameTrainClassToSection < ActiveRecord::Migration[7.0]
  def change
    rename_column :trains, :train_class, :section
  end
end
