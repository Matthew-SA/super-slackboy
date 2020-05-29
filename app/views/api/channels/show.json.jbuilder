if @membership
  json.membership do
    json.partial! 'api/memberships/membership', membership: @membership
  end
end

json.channel do
  json.partial! '/api/channels/channel', channel: @channel
  json.messageIds @channel.messages.pluck(:id)
  json.userIds @channel.users.pluck(:id)
  
  json.last_read @membership ? @membership.last_read : nil
  json.membership_id @membership ? @membership.id : nil
end

json.messages do
  @messages.each do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end