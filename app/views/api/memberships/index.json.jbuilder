@memberships.each do |membership|
  json.set! membership.id do 
    json.extract! membership, :unread_messages
    json.extract! membership.channel, :id, :name, :topic, :description
  end
end