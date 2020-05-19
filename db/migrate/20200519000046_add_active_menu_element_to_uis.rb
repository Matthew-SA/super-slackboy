class AddActiveMenuElementToUis < ActiveRecord::Migration[5.2]
  def change
    add_column :uis, :active_menu_item, :string
  end
end
