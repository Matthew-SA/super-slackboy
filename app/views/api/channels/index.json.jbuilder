json.channels do
  @channels.each do |channel|
    json.set! channel.id do
      json.partial! 'api/channels/channel', channel: channel
      json.messageIds []
      json.userIds channel.users.pluck(:id)
    end
  end
end


# Should be careful with reducer - could overwrite last_read and mem_id of user's chans