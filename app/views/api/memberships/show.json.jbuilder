  json.extract! @membership, :id, :channel_id, :last_arrived, :last_departed
  json.extract! @membership.channel, :name
