import {
  RECEIVE_MEMBERSHIPS,
  RECEIVE_MEMBERSHIP
} from '../actions/membership_actions';
import { RECEIVE_CHANNEL } from '../actions/channel_actions';


const membershipsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  const nextState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVE_MEMBERSHIPS:
      return action.memberships
    case RECEIVE_MEMBERSHIP:
      nextState[action.membership.id] = action.membership
      // nextState[action.membership.membership.channel_id] = action.membership.membership;
      // if (action.membership.oldmembership) nextState[action.membership.oldmembership.channel_id] = action.membership.oldmembership;
      return nextState
    // case RECEIVE_CHANNEL:
    //   nextState[action.channel.membership.id] = action.channel.membership;
    //   return nextState

    default:
      return oldState;
  }


}

export default membershipsReducer;