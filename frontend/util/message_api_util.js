export const fetchMessages = (type) => (
  $.ajax({
    url: `/api/messages`,
    method: `GET`,
    data: { type }
  })
)

export const fetchMessage = messageId => (
  $.ajax({
    url: `/api/messages/${messageId}`,
    method: `GET`,
  })
)

export const createMessage = message => (
  $.ajax({
    url: `/api/messages/`,
    method: `POST`,
    data: { message },
  })
)

export const updateMessage = message => (
  $.ajax({
    url: `/api/messages/${message.id}`,
    method: `PATCH`,
    data: { message },
  })
)

export const deleteMessage = messageId => (
  $.ajax({
    url: `api/messages/${messageId}`,
    method: `DELETE`,
  })
)