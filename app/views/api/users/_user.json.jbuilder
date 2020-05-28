json.extract! user, :id, :username, :focus, :current_membership
json.channelIds user.channels.pluck(:id)
