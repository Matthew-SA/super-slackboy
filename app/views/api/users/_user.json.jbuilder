json.extract! user, :id, :username, :email

json.ui do
  json.extract! user.ui, :show_channels
end