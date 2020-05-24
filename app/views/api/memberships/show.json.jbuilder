json.membership do
  json.partial! 'api/memberships/membership', membership: @membership
end

json.focus @focus








# json.membership do
#   json.extract! @membership, :id, :channel_id, :last_read
#   json.extract! @membership.channel, :name, :topic, :description
# end

# if @oldmembership 
#   json.oldmembership do 
#     json.extract! @oldmembership, :id, :channel_id, :last_read
#     json.extract! @oldmembership.channel, :name
#   end
# end

# json.focus @focus