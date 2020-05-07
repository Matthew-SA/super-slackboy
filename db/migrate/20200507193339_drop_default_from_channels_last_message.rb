class DropDefaultFromChannelsLastMessage < ActiveRecord::Migration[5.2]
  def change
    change_column_default :channels, :last_message_posted, nil
  end
end
