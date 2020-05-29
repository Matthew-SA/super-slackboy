json.channels do
  @memberships.each do |membership|
    json.set! membership.channel.id do
      json.partial! 'api/channels/channel', channel: membership.channel
      json.messageIds []
      json.userIds membership.channel.users.pluck(:id)
    end
  end
end

json.memberships do 
  @memberships.each do |membership|
    json.set! membership.channel_id do
      json.extract! membership, :last_read
      json.membership_id membership.id
    end
  end
end


#### reference from matt
# json.channels do
#   @memberships.each do |membership|
#     json.set! membership.channel.id do
#       json.partial! 'api/channels/channel', channel: membership.channel
#       json.partial! 'api/memberships/membership', membership: membership
#       json.messageIds []
#       json.userIds []
#     end
#   end
# end