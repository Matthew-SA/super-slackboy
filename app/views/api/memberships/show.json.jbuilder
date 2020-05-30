json.channel do
  json.partial! 'api/channels/channel', channel: @channel
  json.messageIds @channel.messages.pluck(:id)
  json.userIds @channel.users.pluck(:id)
end

json.membership do
  json.channel_id @channel.id
  json.partial! 'api/memberships/membership', membership: @membership
end