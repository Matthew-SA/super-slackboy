  json.extract! @membership, :last_accessed
  json.extract! @membership.channel, :id, :name, :topic, :description