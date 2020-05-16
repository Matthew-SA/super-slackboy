@memberships.each do |membership|
  json.set! membership.channel_id do 
    json.extract! membership, :id, :channel_id, :last_arrived, :last_departed
    json.extract! membership.channel, :name
    json.unread_messages membership.channel.last_message_posted > membership.last_departed 
  end
end

# @channels.each do |channel|
#   json.set! channel.id do
#     json.extract! channel, :id, :name
#     json.extract! channel.membership, :last_arrived

#   end
# end