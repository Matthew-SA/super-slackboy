import {
  RECEIVE_MESSAGES,
  RECEIVE_MESSAGE,
  // REMOVE_MESSAGE,
} from '../actions/message_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_MEMBERSHIP } from '../actions/membership_actions';


const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_CHANNEL:
      return Object.assign({}, oldState, action.messages)
    case RECEIVE_MESSAGE:
      nextState[action.message.id] = action.message;
      return nextState
    default:
      return oldState;
  }


}

export default messagesReducer;