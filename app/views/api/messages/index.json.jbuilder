@messages.each do |message|
  json.set! message.id do 
    json.extract! message, :id, :body, :time, :channel_id

    json.author do
      json.extract! message.user, :username, :id
    end
  end
end