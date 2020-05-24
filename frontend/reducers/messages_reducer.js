import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  // REMOVE_MESSAGE,
} from '../actions/message_actions';


const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return Object.assign(nextState, action.messages)
    case RECEIVE_MESSAGE:
      nextState[action.message.id] = action.message;
      return nextState
    // case REMOVE_MESSAGE:
    //   delete nextState[action.messageId]
    //   return nextState;

    default:
      return oldState;
  }


}

export default messagesReducer;