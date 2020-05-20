json.extract! @channel, :id, :name, :description
json.extract! @membership, :last_arrived, :last_departed
json.channel_id @channel.id

json.focus @focus