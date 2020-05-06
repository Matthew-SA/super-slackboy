export const fetchMemberships = () => (
  $.ajax({
    url: `/api/memberships`,
    method: `GET`,
  })
)

export const fetchMembership = (membershipId) => (
  $.ajax({
    url: `/api/memberships/${membershipId}`,
    method: `GET`,
    data: { membershipId }
  })
)

export const updateMembership = (membershipId) => (
  $.ajax({
    url: `/api/memberships/${membershipId}`,
    method: `PATCH`,
    data: { membershipId }
  })
)