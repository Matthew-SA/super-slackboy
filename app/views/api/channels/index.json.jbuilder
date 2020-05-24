json.channels do
  @channels.each do |channel|
    json.set! channel.id do
      json.partial! 'api/channels/channel', channel: channel
      json.messageIds []
    end
  end
end

json.focus @focus
