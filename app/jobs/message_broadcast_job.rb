class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast(
        "chat_#{message.channel_id}", render_message(message)
      )
  end

  private

  def render_message(message)
    JSON.parse(
      ApplicationController.render(template: 'api/messages/show', locals: { message: message })
    )
  end

end
