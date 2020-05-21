@memberships.each do |membership|
  json.set! membership.channel_id do 
    json.extract! membership, :id, :channel_id, :last_read
    json.extract! membership.channel, :name, :topic, :description
    json.unread_messages membership.channel.last_message_posted > membership.last_read 
  end
end