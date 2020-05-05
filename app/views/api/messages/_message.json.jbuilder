json.extract! message, :id, :body, :time, :channel_id

json.author do
  json.extract! message.user, :username, :id
end