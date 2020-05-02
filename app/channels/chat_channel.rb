class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end
  def speak(data)
    user = current_user(data['user_id'], data['token'])
    return false if !user

    
    message = Message.new(body: data['message'], user_id: data['user_id'])
    if message.save
      ChatChannel.broadcast_to('chat_channel',  
        JSON.parse(
          ApplicationController.render(template: 'api/messages/show', locals: { message: message })
        )
      )
    end
  end
  def unsubscribed; end
end