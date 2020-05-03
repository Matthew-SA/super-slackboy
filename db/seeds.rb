# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ApplicationRecord.transaction do
  User.destroy_all

  User.create(username: 'Guest', email: 'guest@guest.com', password: 'guest12345', current_channel: 1)
  Ui.create(user_id: 1)

  Channel.create(name: 'General', topic: 'Talk about anything!', description: 'General Chat!')
  Channel.create(name: 'Demo Channel 1', topic: 'such channel', description: 'demo purposes only!')
  Channel.create(name: 'Demo Channel 2', topic: 'much chat', description: 'demo purposes only!')
  
  Membership.create(user_id: 1, channel_id: 1)
  Membership.create(user_id: 1, channel_id: 2)
  Membership.create(user_id: 1, channel_id: 3)
  
end


