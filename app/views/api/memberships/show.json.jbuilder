json.membership do
  json.extract! @membership, :id, :channel_id, :last_arrived, :last_departed
  json.extract! @membership.channel, :name
  json.bob "I'm the new membership"
end

json.oldmembership do 
  json.extract! @oldmembership, :id, :channel_id, :last_arrived, :last_departed
  json.extract! @oldmembership.channel, :name
  json.bob "I'm the old memberships"
end