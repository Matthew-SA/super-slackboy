export const fetchUi = () => (
  $.ajax({
    url: `/api/ui`,
    method: `GET`,
  })
)

export const updateUi = uiElement => (
  $.ajax({
    url: `/api/ui`,
    method: `PATCH`,
    data: { uiElement }
  })
)