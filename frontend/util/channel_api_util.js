export const fetchChannels = () => (
  $.ajax({
    url: `/api/channels`,
    method: `GET`,
  })
)