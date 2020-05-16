import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
import { RECEIVE_MEMBERSHIP } from '../actions/membership_actions'
import { RECEIVE_CHANNEL } from '../actions/channel_actions'

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id, currentChannel: action.currentUser.current_channel };
    case RECEIVE_MEMBERSHIP:
      nextState.currentChannel = action.membership.membership.channel_id
      return nextState;
    case RECEIVE_CHANNEL:
      nextState.currentChannel = action.channel.id
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
