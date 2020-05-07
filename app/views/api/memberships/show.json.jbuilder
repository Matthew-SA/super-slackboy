  json.extract! @membership, :id, :last_accessed, :channel_id
  json.extract! @membership.channel, :name