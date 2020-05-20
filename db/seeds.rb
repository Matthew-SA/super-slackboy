# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ApplicationRecord.transaction do
  User.destroy_all

  User.create(username: 'Guest', email: 'guest@guest.com', password: 'guest12345')
  Ui.create(user_id: 1)

  Channel.create(name: 'general', topic: 'Talk about anything!', description: 'General Chat!', last_message_posted: DateTime.now)
  Channel.create(name: 'demo-channel-2', topic: 'such channel', description: 'demo purposes only!', last_message_posted: DateTime.now)
  Channel.create(name: 'demo-channel-3', topic: 'much chat', description: 'demo purposes only!', last_message_posted: DateTime.now)
  Channel.create(name: 'demo-channel-4', topic: 'much chat', description: 'demo purposes only!', last_message_posted: DateTime.now)
  
  Membership.create(user_id: 1, channel_id: 4, last_read: DateTime.now)
  Membership.create(user_id: 1, channel_id: 3, last_read: DateTime.now)
  Membership.create(user_id: 1, channel_id: 2, last_read: DateTime.now)
  Membership.create(user_id: 1, channel_id: 1, last_read: DateTime.now)
  
end


