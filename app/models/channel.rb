class Channel < ApplicationRecord
  has_many :messages
  has_many :memberships
  has_many :users, through: :memberships
end
