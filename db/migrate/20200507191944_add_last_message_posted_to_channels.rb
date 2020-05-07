class AddLastMessagePostedToChannels < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :last_message_posted, :datetime, null:false, default: DateTime.now
  end
end
