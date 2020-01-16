class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end
  def speak(data)
    message = Message.new(body: data['message'], user_id: data['user_id'])
    # user = User.find_by(id: data['user_id'])
    if message.save
      # socket = { author: message.user.username, message: message.body, id: message.id, type: 'message' }
      ChatChannel.broadcast_to('chat_channel',  
        JSON.parse(
          ApplicationController.render(template: 'api/messages/show.json.jbuilder', locals: { message: message })
        )
      )
    end
  end
  # def load
    # messages = Message.all.collect { |message| { author: message.user.username, message: message.body, id: message.id } }
    # socket = { messages: messages, type: 'messages' }
    # ChatChannel.broadcast_to('chat_channel', socket)
  # end
  def unsubscribed; end
end
