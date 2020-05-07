@memberships.each do |membership|
  json.set! membership.channel_id do 
    json.extract! membership, :id, :last_accessed, :channel_id
    json.extract! membership.channel, :name
    json.extract! membership.channel.messages.last
    json.unread_messages membership.channel.last_message_posted > membership.last_accessed 
  end
end
