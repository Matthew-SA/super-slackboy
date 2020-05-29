import {
  RECEIVE_MEMBERSHIPS,
  RECEIVE_MEMBERSHIP,
  REMOVE_MEMBERSHIP
} from '../actions/membership_actions';

import { RECEIVE_CHANNEL } from '../actions/channel_actions';


const membershipsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_MEMBERSHIPS:
      return action.memberships;
    case RECEIVE_MEMBERSHIP:
      nextState[action.membership.id] = action.membership;
      return nextState;
    case REMOVE_MEMBERSHIP:

      delete nextState[action.membership.id];
      return nextState;
    case RECEIVE_CHANNEL:
      if (action.membership) nextState[action.membership.id] = action.membership
      return nextState;
    default:
      return oldState;
  }


}

export default membershipsReducer;