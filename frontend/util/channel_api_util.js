export const fetchChannels = () => (
  $.ajax({
    url: `/api/channels`,
    method: `GET`,
  })
)

export const fetchChannel = channelId => (
  $.ajax({
    url: `/api/channels/${channelId}`,
    method: `GET`,
  })
)

export const createChannel = channel => (
  $.ajax({
    url: `/api/channels`,
    method: `POST`,
    data: {channel},
  })
)