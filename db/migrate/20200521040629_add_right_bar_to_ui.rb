class AddRightBarToUi < ActiveRecord::Migration[5.2]
  def change
    add_column :uis, :rightbar, :boolean, default: true
  end
end
