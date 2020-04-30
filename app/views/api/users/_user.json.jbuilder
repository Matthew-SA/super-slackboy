json.extract! user, :id, :username, :email

json.test do
  json.extract! user.ui, :show_channels
end