import * as MessageAPIUtil from '../util/message_api_util'

// export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
// export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

// const receiveMessages = messages => ({
//   type: RECEIVE_MESSAGES,
//   messages
// })

const receiveMessage = message => ({
  type: RECEIVE_MESSAGE,
  message
})

// export const requestMessages = (type) => dispatch => (
//   MessageAPIUtil.fetchMessages(type).then(messages => dispatch(receiveMessages(messages)))
// )

// export const requestMessage = messageId => dispatch => (
//   MessageAPIUtil.fetchMessage(messageId).then(message => dispatch(receiveMessage(message)))
// )

// export const createMessage = message => dispatch => (
//   MessageAPIUtil.createMessage(message).then(message => dispatch(receiveMessage(message)))
// )

export const incomingMessage = message => dispatch => (
  dispatch(receiveMessage(message)))

export const updateMessage = message => dispatch => (
  MessageAPIUtil.updateMessage(message).then(message => dispatch(receiveMessage(message)))
)

// export const deleteMessage = messageId => dispatch => (
//   MessageAPIUtil.deleteMessage(messageId).then(() => dispatch(removeMessage(messageId)))
// )