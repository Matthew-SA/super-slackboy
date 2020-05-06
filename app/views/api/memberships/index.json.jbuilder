@memberships.each do |membership|
  json.set! membership.id do 
    json.extract! membership, :last_accessed
    json.extract! membership.channel, :id, :name, :topic, :description
  end
end