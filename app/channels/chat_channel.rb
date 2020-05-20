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
    return false if data['message'].length <= 0
    @user = User.find(current_user.id)
    if @user
      @channel = Channel.find(@user.focus)
      @channel.update(last_message_posted: DateTime.now)
      Message.create!(
        body: data['message'], 
        user_id: @user.id, 
        channel_id: @user.focus
      )
    end
  end

  def unsubscribed
    @user = User.find(current_user.id)
    @membership = Membership.find_by(channel_id: @user.focus, user_id: @user.id)
    @membership.update(last_read: DateTime.now)
  end
  
end