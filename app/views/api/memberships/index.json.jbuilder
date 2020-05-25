json.memberships do
  @memberships.each do |membership|
    json.set! membership.id do
      json.partial! 'api/memberships/membership', membership: membership
    end
  end
end

json.channels do
  @channels.each do |channel|
    json.set! channel.id do
      json.partial! 'api/channels/channel', channel: channel
      json.messageIds []
      json.userIds []
    end
  end
end