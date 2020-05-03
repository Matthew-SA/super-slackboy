class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_for 'chat_channel'
    room = current_user.current_channel
    stream_from "chat_#{room}"
  end
  def speak(data)
    user = current_user
    return false if !user
    
    room = current_user.current_channel
    message = Message.new(body: data['message'], user_id: data['user_id'], channel_id: room)
    if message.save
      ActionCable.server.broadcast(
        "chat_#{room}",
        JSON.parse(
          ApplicationController.render(template: 'api/messages/show', locals: { message: message })
        )
      )

      # ChatChannel.broadcast_to('chat_channel',  
      #   JSON.parse(
      #     ApplicationController.render(template: 'api/messages/show', locals: { message: message })
      #   )
      # )
    end
  end
  def unsubscribed; end
end