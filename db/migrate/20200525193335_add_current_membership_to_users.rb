class AddCurrentMembershipToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :current_membership, :integer
  end
end
