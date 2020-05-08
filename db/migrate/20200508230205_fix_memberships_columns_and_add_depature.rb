class FixMembershipsColumnsAndAddDepature < ActiveRecord::Migration[5.2]
  def change
    change_column_null :memberships, :last_accessed, true
    rename_column :memberships, :last_accessed, :last_arrived
    add_column :memberships, :last_departed, :datetime, null: false
  end
end
