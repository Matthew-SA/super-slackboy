class ChatChannel < ApplicationCable::Channel
  def subscribed
    channels = current_user.channels
    channels.each do |channel|
      stream_from "chat_#{channel.id}"
    end
  end
  def speak(data)
    user = User.find_by(id: current_user.id)
    return false if !user
    Message.create!(
      body: data['message'], 
      user_id: user.id, 
      channel_id: user.current_channel
    ) 
  end
  def unsubscribed; end
end