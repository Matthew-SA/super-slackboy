// export const fetchChannels = () => (
//   $.ajax({
//     url: `/api/channels`,
//     method: `GET`,
//   })
// )

export const createChannel = channel => (
  $.ajax({
    url: `/api/channels`,
    method: `POST`,
    data: {channel},
  })
)