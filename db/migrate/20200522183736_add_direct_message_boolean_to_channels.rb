class AddDirectMessageBooleanToChannels < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :direct_message, :boolean, default: false
  end
end
