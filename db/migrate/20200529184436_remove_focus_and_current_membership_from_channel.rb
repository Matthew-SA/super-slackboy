class RemoveFocusAndCurrentMembershipFromChannel < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :focus
    remove_column :users, :current_membership
  end
end
