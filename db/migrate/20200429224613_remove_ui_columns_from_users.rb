class RemoveUiColumnsFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :hide_channels_ui
    remove_column :users, :hide_direct_messages_ui
  end
end
