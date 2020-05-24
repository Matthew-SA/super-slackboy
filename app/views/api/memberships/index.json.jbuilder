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
    end
  end
end



# @memberships.each do |membership|
#   json.set! membership.channel_id do 
#     json.extract! membership, :id, :channel_id, :last_read
#     json.extract! membership.channel, :name, :topic, :description
#     json.unread_messages membership.channel.last_message_posted > membership.last_read 
#   end
# end

# {
#   id,
#   channel_id,
#   last_read
# }[]


# {
#   membership: {
#     id,
#     channel_id,
#     last_read
#   },
#     channel: {
#       id,
#       name
#       description,
#       topic
#     }[]
# }

# {memberships: [],
# channels: []}