class RenameLastDepartToLastRead < ActiveRecord::Migration[5.2]
  def change
    rename_column :memberships, :last_departed, :last_read
    remove_column :memberships, :last_arrived
  end
end
