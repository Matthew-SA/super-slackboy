class ChatChannel < ApplicationCable::Channel
  def subscribed
    room = current_user.current_channel
    stream_from "chat_#{room}"
  end
  def speak(data)
    return false if !current_user
    Message.create!(
      body: data['message'], 
      user_id: current_user.id, 
      channel_id: current_user.current_channel
    )
    
  end
  def unsubscribed; end
end