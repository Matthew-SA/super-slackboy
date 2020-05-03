class AddDefaultCurrentChannelToUsers < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :current_channel, :integer, default: 1
  end
end
