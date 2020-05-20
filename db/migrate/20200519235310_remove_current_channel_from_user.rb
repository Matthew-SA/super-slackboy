class RemoveCurrentChannelFromUser < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :current_channel
  end
end
