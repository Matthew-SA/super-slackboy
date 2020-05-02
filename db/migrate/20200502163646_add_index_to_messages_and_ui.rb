class AddIndexToMessagesAndUi < ActiveRecord::Migration[5.2]
  def change
    add_index :messages, :user_id
    add_index :uis, :user_id
  end
end
