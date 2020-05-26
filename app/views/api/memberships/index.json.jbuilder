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
      json.membershipId channel.memberships.first.id
      json.messageIds []
      json.userIds []
    end
  end
end

json.current_membership @current_membership
