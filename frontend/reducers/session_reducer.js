import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
import { RECEIVE_MEMBERSHIP } from '../actions/membership_actions'
import { RECEIVE_CHANNEL, RECEIVE_CHANNELS } from '../actions/channel_actions'

const _nullUser = Object.freeze({
  id: null
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let focus = action.currentUser.focus
      return { id: action.currentUser.id, focus: focus };
    case RECEIVE_MEMBERSHIP:
      nextState.focus = action.membership.focus
      return nextState;
    case RECEIVE_CHANNEL:
      nextState.focus = action.channel.focus
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
