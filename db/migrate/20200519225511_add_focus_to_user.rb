class AddFocusToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :focus, :string, default: '1'
  end
end
