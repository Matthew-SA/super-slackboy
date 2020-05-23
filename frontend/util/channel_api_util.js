export const fetchChannels = type => (
  $.ajax({
    url: `/api/channels`,
    method: `GET`,
    data: {type}
  })
)

export const createChannel = channel => (
  $.ajax({
    url: `/api/channels`,
    method: `POST`,
    data: {channel},
  })
)