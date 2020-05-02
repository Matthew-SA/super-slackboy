class CreateMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :memberships do |t|
      t.integer "user_id"
      t.integer "channel_id"
      t.timestamps
    end
    add_index :memberships, [:channel_id, :user_id], unique: true
    add_index :memberships, :channel_id
    add_index :memberships, :user_id
  end
end
