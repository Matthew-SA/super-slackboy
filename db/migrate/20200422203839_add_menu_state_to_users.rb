class AddMenuStateToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :hide_channels_ui, :boolean, :null => false, :default => false
    add_column :users, :hide_direct_messages_ui, :boolean, :null => false, :default => false
  end
end
