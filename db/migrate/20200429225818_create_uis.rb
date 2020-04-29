class CreateUis < ActiveRecord::Migration[5.2]
  def change
    create_table :uis do |t|
      t.boolean "show_channels", :default => true
      t.boolean "show_direct_messages", :default => true
      t.integer "user_id"
    end
  end
end
