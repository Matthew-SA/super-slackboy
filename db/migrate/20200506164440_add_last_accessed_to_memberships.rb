class AddLastAccessedToMemberships < ActiveRecord::Migration[5.2]
  def change
    add_column :memberships, :last_arrived, :datetime
  end
end
