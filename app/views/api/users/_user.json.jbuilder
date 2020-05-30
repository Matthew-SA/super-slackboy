json.extract! user, :id, :username
json.channelIds user.channels.pluck(:id)
