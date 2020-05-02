class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string "name", null: false
      t.string "topic"
      t.string "description"
      t.string "owner"
      t.index :name, unique: true
      t.timestamps
    end
  end
end
