json.extract! message, :id, :body, :time 

json.author do
  json.extract! message.user, :username, :id
end