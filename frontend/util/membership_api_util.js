export const fetchMemberships = () => (
  $.ajax({
    url: `/api/memberships`,
    method: `GET`,
  })
)