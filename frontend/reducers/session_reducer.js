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
      const { id, focus, current_membership } = action.currentUser
      return { id: id, focus: focus, currentMembership: current_membership };
    case RECEIVE_CHANNELS:
      nextState.focus = action.focus
      return nextState;
    // case RECEIVE_MEMBERSHIP:
    //   nextState.focus = action.focus
    //   return nextState;
    case RECEIVE_CHANNEL:
      nextState.focus = action.focus
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
