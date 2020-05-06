class AddUnreadMessagesBooleanToMemberships < ActiveRecord::Migration[5.2]
  def change
    add_column :memberships, :unread_messages, :boolean, default: true;
  end
end
