class ChatChannel < ApplicationCable::Channel

  def subscribed
    channels = current_user.channels
    channels.each do |channel|
      stream_from "chat_#{channel.id}"
    end
  end

  def start_listening(data)
    room = data['room']
    stream_from "chat_#{room}"
  end

  # def begin_listening
  #   room = current_user.current_room
  #   stream_from "chat_#{room}"
  # end

  # def refresh_streams
  #   stop_all_streams
  #   @channels = current_user.channels
  #   @channels.each do |channel|
  #     stream_from "chat_#{channel.id}"
  #   end
  # end

  def speak(data)
    user = User.find_by(id: current_user.id)
    channel = Channel.find_by(id: user.focus)
    channel.last_message_posted = DateTime.now
    channel.save
    return false if !user
    Message.create!(
      body: data['message'], 
      user_id: user.id, 
      channel_id: user.focus
    ) 
  end

  def unsubscribed
    membership = Membership.find_by(channel_id: current_user.focus, user_id: current_user.id)
    membership.last_departed = DateTime.now
    membership.save
  end
  
end