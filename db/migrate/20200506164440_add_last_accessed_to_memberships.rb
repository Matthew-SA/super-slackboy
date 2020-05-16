class AddLastAccessedToMemberships < ActiveRecord::Migration[5.2]
  def change
    add_column :memberships, :last_accessed, :datetime
  end
end
