export const fetchUi = () => (
  $.ajax({
    url: `/api/ui`,
    method: `GET`,
  })
)

export const toggleUiElement = uiElement => (
  $.ajax({
    url: `/api/ui`,
    method: `PATCH`,
    data: { uiElement }
  })
)