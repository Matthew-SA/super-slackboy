json.extract! message, :id, :body, :user_id, :updated_at

json.author do
  json.extract! message.user, :username
end