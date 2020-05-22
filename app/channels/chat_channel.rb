class ChatChannel < ApplicationCable::Channel

  def subscribed
    @channels = current_user.channels
    @channels.each do |channel|
      stream_for channel
    end
  end

  def start_listening(data)
    @user = User.find(current_user.id)
    @channel = Channel.find(@user.focus)
    stream_for @channel
  end

  def speak(data)
    return false if data['message'].length <= 0
    @user = User.find(current_user.id)
    if @user
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