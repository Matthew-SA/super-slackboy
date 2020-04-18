class Message < ApplicationRecord
  include ActionView::Helpers::DateHelper

  belongs_to :user

  # def author
  #   self.user.username
  # end

  def time
    time = "#{(self.created_at.to_time)}"[11..15]
    hours = time[0..1].to_i

    hours < 12 ? time += ' AM' : time += ' PM'

    if hours <= 12
      time[0..1] = hours.to_s
    else
      time[0..1] = (hours - 12).to_s
    end

    time
  end

end