class Message < ApplicationRecord
  include ActionView::Helpers::DateHelper

  belongs_to :user
  belongs_to :channel

  def time
    self.created_at.to_time
  end

end