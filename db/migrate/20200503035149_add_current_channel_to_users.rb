class AddCurrentChannelToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :current_channel, :integer
  end
end
