class ChatChannel < ApplicationCable::Channel
  def subscribed
    channels = current_user.channels
    channels.each do |channel|
      puts channel.id
      stream_from "chat_#{channel.id}"
    end
    # room = current_user.current_channel
    # stream_from "chat_#{room}"
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