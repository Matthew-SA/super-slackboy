class ChatChannel < ApplicationCable::Channel
  def subscribed
    room = current_user.current_channel
    stream_from "chat_#{room}"
  end
  def speak(data)
    return false if !current_user

    room = current_user.current_channel
    message = Message.new(body: data['message'], user_id: current_user.id, channel_id: room)
    if message.save
      ActionCable.server.broadcast(
        "chat_#{room}",
        JSON.parse(
          ApplicationController.render(template: 'api/messages/show', locals: { message: message })
        )
      )
    end
  end
  def unsubscribed; end
end