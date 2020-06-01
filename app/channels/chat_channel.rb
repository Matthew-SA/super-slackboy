class ChatChannel < ApplicationCable::Channel

  def subscribed
    @channel = Channel.find(params['room'])
    stream_for @channel
  end

  def speak(data)
    return false if data['message'].length <= 0
    Message.create!(
      body: data['message'], 
      user_id: current_user.id, 
      channel_id: @channel.id
    )
  end

  def update(data)
    return false if data['message'].length <= 0
    message = Message.find(data['messageId'])
    if message.update(body: data['message'])
      ChatChannel.broadcast_to(@channel, JSON.parse(
        ApplicationController.render(
        template: 'api/messages/show', 
        locals: { message: message }
        )
      ))
    end
  end

  def unsubscribed
    #params and @channel are available here.
  end
  
end