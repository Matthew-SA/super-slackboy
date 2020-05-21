class AddFocusToUi < ActiveRecord::Migration[5.2]
  def change
    add_column :uis, :focus, :string, default: "1"
  end
end
