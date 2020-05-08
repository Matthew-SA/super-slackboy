class AddNullFalseToLastArrived < ActiveRecord::Migration[5.2]
  def change
    change_column_null :memberships, :last_arrived, false

  end
end
