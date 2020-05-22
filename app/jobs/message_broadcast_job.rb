class MessageBroadcastJob < ApplicationJob
  queue_as :default

  def perform(message)
    @channel = Channel.find(message.channel_id)
    @channel.update(last_message_posted: DateTime.now)
    ChatChannel.broadcast_to(@channel, render_message(message))
  end

  private

  def render_message(message)
    JSON.parse(
      ApplicationController.render(
        template: 'api/messages/show', 
        locals: { message: message }
      )
    )
  end

end
