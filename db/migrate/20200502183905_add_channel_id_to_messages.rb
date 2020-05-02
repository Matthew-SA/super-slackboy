class AddChannelIdToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :channel_id, :string
    add_index :messages, :channel_id
  end
end
