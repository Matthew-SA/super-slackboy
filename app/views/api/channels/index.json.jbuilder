# @memberships.each do |membership|
#   json.set! membership.id do 
#     json.extract! membership
#     json.extract! membership.channel, :id, :name, :topic, :description
#   end
# end

@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name, :topic, :description
  end
end