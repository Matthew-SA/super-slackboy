json.channel do 
  json.partial! 'api/channels/channel', channel: @channel
end
json.membership do
  json.partial! 'api/memberships/membership', membership: @membership
end
json.focus @focus