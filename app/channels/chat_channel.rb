class ChatChannel < ApplicationCable::Channel

  def subscribed
    @channels = current_user.channels
    @channels.each do |channel|
      stream_for channel
    end
    stream_from "current_user_#{current_user.id}"
    # stream_for current_user
  end

  def start_listening(data)
    @membership = Membership.find_by(user_id: current_user.id, channel_id: data['room'])
    if @membership
      return
    end
    
    @channel = Channel.find(data['room'])
    if !@channel.direct_message
      stream_for @channel
    end
  end

  def speak(data)
    return false if data['message'].length <= 0
    @channel = Channel.find(data['channelId'])
    if !@channel.direct_message
      Message.create!(
        body: data['message'], 
        user_id: current_user.id, 
        channel_id: data['channelId']
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