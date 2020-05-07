@memberships.each do |membership|
  json.set! membership.channel_id do 
    json.extract! membership, :id, :last_accessed, :channel_id
    json.extract! membership.channel, :name
  end
end
