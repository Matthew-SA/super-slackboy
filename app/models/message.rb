class Message < ApplicationRecord
  include ActionView::Helpers::DateHelper

  belongs_to :user

  # def author
  #   self.user.username
  # end

  def time
    time = "#{(self.created_at.to_time)}"[11..15]
    time[0] == '0' ? time[1..4] : time
  end

end
