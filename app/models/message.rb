class Message < ApplicationRecord
  include ActionView::Helpers::DateHelper

  belongs_to :user

  # def author
  #   self.user.username
  # end

  def time
    "#{(self.created_at.to_time)}"
  end

end