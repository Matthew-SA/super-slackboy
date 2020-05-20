class RemoveActiveItemFromUi < ActiveRecord::Migration[5.2]
  def change
    remove_column :uis, :active_menu_item
  end
end
