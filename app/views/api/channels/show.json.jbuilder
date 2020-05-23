
json.extract! @channel, :id, :name, :description
json.extract! @membership, :last_read
json.channel_id @channel.id

json.focus @focus