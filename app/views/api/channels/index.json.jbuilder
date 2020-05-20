@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :name, :topic, :description
  end
end

json.focus "channel_browser"

