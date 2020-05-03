export const changeCurrentChannel = (userId, newChannelId) => (
  $.ajax({
    method: 'PATCH',
    url: '/api/users',
    data: { userId, newChannelId }
  })
);