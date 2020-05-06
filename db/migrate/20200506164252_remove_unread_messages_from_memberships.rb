class RemoveUnreadMessagesFromMemberships < ActiveRecord::Migration[5.2]
  def change
    remove_column :memberships, :unread_messages
  end
end
