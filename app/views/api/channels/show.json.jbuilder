json.channel do
  json.partial! '/api/channels/channel', channel: @channel
  json.messageIds @channel.messages.pluck(:id)
  json.userIds @channel.users.pluck(:id)
end

json.messages do
  @messages.each do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end