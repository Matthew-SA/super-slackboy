class Message < ApplicationRecord
  include ActionView::Helpers::DateHelper

  after_create_commit { MessageBroadcastJob.perform_later self }

  belongs_to :user
  belongs_to :channel

  def time
    self.created_at.to_time
  end

end