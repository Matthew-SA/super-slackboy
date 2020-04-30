export const fetchUI = () => (
  $.ajax({
    url: `/api/ui`,
    method: `GET`,
  })
)

// export const toggleChannelsUI = (userId) => (
//   $.ajax({
//     url: `/api/ui/${userId}`,
//     method: `PATCH`
//   })
// )