class ChatChannel < ApplicationCable::Channel

  def subscribed
    @channels = current_user.channels
    @channels.each do |channel|
      stream_for channel
    end
    stream_from "current_user_#{current_user.id}"
    stream_for current_user
  end

  def start_listening(data)
    @channel = Channel.find(data['room'])
    if @channel && !@channel.direct_message
      stream_for @channel
    end
  end

  def stop_listening(data)
    @channel = Channel.find(data['room'])
    if @channel
      stop_stream_for @channel
    end
  end

  def speak(data)
    return false if data['message'].length <= 0
    @membership = Membership.find_by(user_id: current_user.id, channel_id: data['room'])
    if @membership
      Message.create!(
        body: data['message'], 
        user_id: current_user.id, 
        channel_id: data['room']
      )
    end
  end

  def unsubscribed
    @user = User.find(current_user.id)
    @membership = Membership.find_by(channel_id: @user.focus, user_id: @user.id)
    if @membership
      @membership.update(last_read: DateTime.now)
    end
  end
  
end