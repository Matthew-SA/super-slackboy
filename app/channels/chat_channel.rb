class ChatChannel < ApplicationCable::Channel

  def subscribed
    room = params['room']
    @channel = Channel.find(room)
    stream_for @channel
    # stream_for current_user
  end

  def speak(data)
    return false if data['message'].length <= 0
    Message.create!(
      body: data['message'], 
      user_id: current_user.id, 
      channel_id: data['room']
    )
  end

  def unsubscribed
    #params and @channel are available here.
  end
  
end