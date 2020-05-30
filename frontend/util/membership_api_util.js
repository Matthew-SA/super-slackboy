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

export const createMembership = membership => (
  $.ajax({
    url: `/api/memberships`,
    method: `POST`,
    data: { membership },
  })
)

export const destroyMembership = (membershipId) => (
  $.ajax({
    url: `/api/memberships/${membershipId}`,
    method: `DELETE`
  })
)